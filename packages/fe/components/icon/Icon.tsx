import { twMerge } from 'tailwind-merge';

enum _SpriteIconEnum {
  'arrow_down',
  'arrow_right',
  'arrow_top',
  'blocks',
  'blog',
  'book',
  'branch',
  'calendar',
  'counter',
  'dialog',
  'dialog_active',
  'dialogs',
  'dialogs_active',
  'document_active',
  'eye',
  'fb',
  'filter_close',
  'group',
  'heart',
  'heart_active',
  'in',
  'info',
  'instagram',
  'left',
  'like',
  'list',
  'magnifier',
  'mail',
  'map',
  'menu',
  'menu_close',
  'menu_plus',
  'menu_right',
  'microscope',
  'minus',
  'pagination_left',
  'pagination_right',
  'person',
  'picture',
  'pin',
  'pin_active',
  'play',
  'plus',
  'point_active',
  'right',
  'share',
  'star_click',
  'star_empty',
  'star_full',
  'star_half',
  'tel',
  'tw',
  'web',
  'yt',
}
// icon external link
// invite send

export type SpriteIcon = keyof typeof _SpriteIconEnum;

interface IconProps {
  icon: SpriteIcon;
  className?: string;
  // size?: 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  height?: string;
  width?: string;
}

export function Icon({
  icon,
  // size,
  height,
  width,
  className,
}: IconProps) {

  return (
    <svg
      className={className}
      width={width}
      height={height}
    >
      <use href={`/svg/sprite.svg#${icon}`} />
    </svg>
  );
}
