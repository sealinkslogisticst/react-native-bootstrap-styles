import { mixinBorderRadius } from './mixins/border-radius';

export default function getClasses(constants, classes) {
  const {
    THEME_COLORS,
    ALERT_PADDING_Y,
    ALERT_PADDING_X,
    ALERT_MARGIN_BOTTOM,
    ALERT_BORDER_RADIUS,
    ALERT_LINK_FONT_WEIGHT,
    ALERT_BORDER_WIDTH,
    ALERT_BG_LEVEL,
    ALERT_BORDER_LEVEL,
    ALERT_COLOR_LEVEL,

    CLOSE_FONT_SIZE,
    CLOSE_FONT_WEIGHT,
    CLOSE_COLOR,
  } = constants;

  const _classes = {
    alert: Object.assign({
      position: 'relative',
      paddingVertical: ALERT_PADDING_Y,
      paddingHorizontal: ALERT_PADDING_X,
      marginBottom: ALERT_MARGIN_BOTTOM,
      borderWidth: ALERT_BORDER_WIDTH,
      borderStyle: 'solid',
      borderColor: 'transparent',  // is it ok?
    },
      mixinBorderRadius(constants, ALERT_BORDER_RADIUS),
    ),

    alerLink: {
      fontWeight: ALERT_LINK_FONT_WEIGHT,
    },

    // // Headings for larger alerts
    // .alert-heading {
    //   // Specified to prevent conflicts of changing $headings-color
    //   color: inherit;
    // }

    alertDismissible: {
      paddingRight: CLOSE_FONT_SIZE + ALERT_PADDING_X * 2,
    },

    alertDismissibleClose: {
      position: 'absolute',
      top: 0,
      right: 0,
      paddingVertical: ALERT_PADDING_Y,
      paddingHorizontal: ALERT_PADDING_X,
      // TODO: color: inherit;
    },

  };

  // alert%color / ex: alertPrimary
  Object.keys(THEME_COLORS).forEach((item) => {
    const classColor = item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

    // temporal
    const background = classColor; // theme-color-level($color, $alert-bg-level)
    const border = classColor; // theme-color-level($color, $alert-border-level)
    const color = classColor; // theme-color-level($color, $alert-color-level)

    classes['alert' + classColor] = {
      color: color;
      borderColor: border;
      // @include gradient-bg($background);
    }

    classes['alert' + classColor + 'Hr'] = {
      borderTopColor: Color($border).darken(0.05).rgb().string(),
    }

    classes['alert' + classColor + 'Link'] = {
      borderTopColor: Color($color).darken(0.10).rgb().string(),
    }
  });

  return _classes;
};
