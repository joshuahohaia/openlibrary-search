import {
  Wrapper,
  CoverSkeleton,
  Info,
  SkeletonBox,
} from './SkeletonItem.styles'

export function SkeletonItem() {
  return (
    <Wrapper>
      <CoverSkeleton />
      <Info>
        <SkeletonBox $width="80%" $height="18px" />
        <SkeletonBox $width="50%" $height="14px" />
        <SkeletonBox $width="30%" $height="12px" />
      </Info>
    </Wrapper>
  )
}
