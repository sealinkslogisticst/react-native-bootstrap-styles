import { mixinBorderRadius } from './border-radius';
import { colorYiq } from './helpers';

export const mixinButtonSize = (
  constants,
  paddingY,
  paddingX,
  fontSize,
  lineHeight,
  borderRadius,
) => (Object.assign({
  paddingHorizontal: paddingX,
  paddingVertical: paddingY,
  // DON'T ADD / fontSize: fontSize,
  // lineHeight: lineHeight,
},
  mixinBorderRadius(constants, borderRadius),
));

export const mixinButtonVariant = (
  constants,
  backgroundColor,
  borderColor,
) => ({
  // todo: move to -Text classes / color: color-yiq($background);
  backgroundColor: backgroundColor,
  borderColor: borderColor,

  // @include gradient-bg($background);
  // @include box-shadow($btn-box-shadow);

  // @include hover {
  //   color: color-yiq($hover-background);
  //   @include gradient-bg($hover-background);
  //   border-color: $hover-border;
  // }

  // &:focus,
  // &.focus {
  //   // Avoid using mixin so we can pass custom focus shadow properly
  //   @if $enable-shadows {
  //     box-shadow: $btn-box-shadow, 0 0 0 $btn-focus-width rgba($border, .5);
  //   } @else {
  //     box-shadow: 0 0 0 $btn-focus-width rgba($border, .5);
  //   }
  // }

  // &:not(:disabled):not(.disabled):active,
  // &:not(:disabled):not(.disabled).active,
  // .show > &.dropdown-toggle {
  //   color: color-yiq($active-background);
  //   background-color: $active-background;
  //   @if $enable-gradients {
  //     background-image: none; // Remove the gradient for the pressed/active state
  //   }
  //   border-color: $active-border;

  //   &:focus {
  //     // Avoid using mixin so we can pass custom focus shadow properly
  //     @if $enable-shadows {
  //       box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($border, .5);
  //     } @else {
  //       box-shadow: 0 0 0 $btn-focus-width rgba($border, .5);
  //     }
  //   }
  // }
});

export const mixinButtonVariantText = (
  constants,
  backgroundColor,
) => ({
  color: colorYiq(backgroundColor),
});

export const mixinButtonVariantDisabled = (
  constants,
  backgroundColor,
  borderColor,
) => ({
  // todo: move to -Text classes / color: color-yiq($background);
  backgroundColor: backgroundColor,
  borderColor: borderColor,
});

export const mixinButtonOutlineVariant = (
  constants,
  color,
  backgroundColor,
) => ({
  // todo: move to -Text classes / color: color;
  borderColor: color,
  backgroundColor: backgroundColor,

  // &:hover {
  //   color: $color-hover;
  //   background-color: $active-background;
  //   border-color: $active-border;
  // }

  // &:focus,
  // &.focus {
  //   box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
  // }

  // &.disabled,
  // &:disabled {
  //   color: $color;
  //   background-color: transparent;
  // }

  // &:not(:disabled):not(.disabled):active,
  // &:not(:disabled):not(.disabled).active,
  // .show > &.dropdown-toggle {
  //   color: color-yiq($active-background);
  //   background-color: $active-background;
  //   border-color: $active-border;

  //   &:focus {
  //     // Avoid using mixin so we can pass custom focus shadow properly
  //     @if $enable-shadows and $btn-active-box-shadow != none {
  //       box-shadow: $btn-active-box-shadow, 0 0 0 $btn-focus-width rgba($color, .5);
  //     } @else {
  //       box-shadow: 0 0 0 $btn-focus-width rgba($color, .5);
  //     }
  //   }
  // }
});
