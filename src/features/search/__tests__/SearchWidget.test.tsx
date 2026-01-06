import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { searchApi } from '../api/searchApi'
import searchReducer from '../searchSlice'
import { SearchWidget } from '../components/SearchWidget'

function renderWithStore(component: React.ReactNode) {
  const store = configureStore({
    reducer: {
      [searchApi.reducerPath]: searchApi.reducer,
      search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(searchApi.middleware),
  })

  return render(
    <Provider store={store}>
      <MemoryRouter>{component}</MemoryRouter>
    </Provider>
  )
}

describe('SearchWidget', () => {
  it('renders search input with placeholder', () => {
    renderWithStore(<SearchWidget />)
    expect(screen.getByPlaceholderText('Quick search...')).toBeInTheDocument()
  })

  it('has correct ARIA attributes', () => {
    renderWithStore(<SearchWidget />)
    const input = screen.getByRole('combobox')
    expect(input).toHaveAttribute('aria-autocomplete', 'list')
    expect(input).toHaveAttribute('aria-controls', 'search-results')
  })

  it('shows dropdown when user types', async () => {
    const user = userEvent.setup()
    renderWithStore(<SearchWidget />)

    const input = screen.getByPlaceholderText('Quick search...')
    await user.type(input, 'test')

    expect(input).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('listbox')).toBeInTheDocument()
  })

  it('does not show dropdown for empty input', () => {
    renderWithStore(<SearchWidget />)
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })

  it('closes dropdown on Escape key', async () => {
    const user = userEvent.setup()
    renderWithStore(<SearchWidget />)

    const input = screen.getByPlaceholderText('Quick search...')
    await user.type(input, 'test')
    expect(screen.getByRole('listbox')).toBeInTheDocument()

    await user.keyboard('{Escape}')
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
  })
})
