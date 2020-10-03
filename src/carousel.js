export default function getClasses(constants, classes) {
  const {
    ENABLE_GRADIENTS,

    CAROUSEL_CONTROL_COLOR,
    CAROUSEL_CONTROL_WIDTH,
    CAROUSEL_CONTROL_OPACITY,
    CAROUSEL_CONTROL_HOVER_OPACITY,
    CAROUSEL_INDICATOR_WIDTH,
    CAROUSEL_INDICATOR_HEIGHT,
    CAROUSEL_INDICATOR_HIT_AREA_HEIGHT,
    CAROUSEL_INDICATOR_SPACER,
    CAROUSEL_INDICATOR_ACTIVE_BG,
    CAROUSEL_CAPTION_WIDTH,
    CAROUSEL_CAPTION_COLOR,
    CAROUSEL_CONTROL_ICON_WIDTH,
  } = constants;

  const _classes = {
    carousel: {
      position: 'relative',
    },

    // .carousel.pointer-event {
    //   touch-action: pan-y;
    // }

    carouselInner: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      // irrelevant / @include clearfix();
    },

    carouselItem: {
      position: 'relative',
      display: 'none',
      flexDirection: 'row', // float: left,
      width: '100%',
      marginRight: '-100%',
      backfaceVisibility: 'hidden',
      // reserved / @include transition($carousel-transition);
    },

    carouselItemActive: {
      display: 'flex',
    },
    carouselItemNext: {
      display: 'flex',
    },
    carouselItemPrev: {
      display: 'flex',
    },

    // .carousel-item-next:not(.carousel-item-left),
    // .active.carousel-item-right {
    //   transform: translateX(100%);
    // }

    // .carousel-item-prev:not(.carousel-item-right),
    // .active.carousel-item-left {
    //   transform: translateX(-100%);
    // }


    // //
    // // Alternate transitions
    // //

    // .carousel-fade {
    //   .carousel-item {
    //     opacity: 0;
    //     transition-property: opacity;
    //     transform: none;
    //   }

    //   .carousel-item.active,
    //   .carousel-item-next.carousel-item-left,
    //   .carousel-item-prev.carousel-item-right {
    //     z-index: 1;
    //     opacity: 1;
    //   }

    //   .active.carousel-item-left,
    //   .active.carousel-item-right {
    //     z-index: 0;
    //     opacity: 0;
    //     @include transition(opacity 0s $carousel-transition-duration);
    //   }
    // }

    // // Icons for within
    // .carousel-control-prev-icon,
    // .carousel-control-next-icon {
    //   display: inline-block;
    //   width: $carousel-control-icon-width;
    //   height: $carousel-control-icon-width;
    //   background: no-repeat 50% / 100% 100%;
    // }
    // .carousel-control-prev-icon {
    //   background-image: escape-svg($carousel-control-prev-icon-bg);
    // }
    // .carousel-control-next-icon {
    //   background-image: escape-svg($carousel-control-next-icon-bg);
    // }


    // // Optional indicator pips
    // //
    // // Add an ordered list with the following class and add a list item for each
    // // slide your carousel holds.

    // .carousel-indicators {
    //   position: absolute;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    //   z-index: 15;
    //   display: flex;
    //   justify-content: center;
    //   padding-left: 0; // override <ol> default
    //   // Use the .carousel-control's width as margin so we don't overlay those
    //   margin-right: $carousel-control-width;
    //   margin-left: $carousel-control-width;
    //   list-style: none;

    //   li {
    //     box-sizing: content-box;
    //     flex: 0 1 auto;
    //     width: $carousel-indicator-width;
    //     height: $carousel-indicator-height;
    //     margin-right: $carousel-indicator-spacer;
    //     margin-left: $carousel-indicator-spacer;
    //     text-indent: -999px;
    //     cursor: pointer;
    //     background-color: $carousel-indicator-active-bg;
    //     background-clip: padding-box;
    //     // Use transparent borders to increase the hit area by 10px on top and bottom.
    //     border-top: $carousel-indicator-hit-area-height solid transparent;
    //     border-bottom: $carousel-indicator-hit-area-height solid transparent;
    //     opacity: .5;
    //     @include transition($carousel-indicator-transition);
    //   }

    //   .active {
    //     opacity: 1;
    //   }
    // }

    // .carousel-caption {
    //   position: absolute;
    //   right: (100% - $carousel-caption-width) / 2;
    //   bottom: 20px;
    //   left: (100% - $carousel-caption-width) / 2;
    //   z-index: 10;
    //   padding-top: 20px;
    //   padding-bottom: 20px;
    //   color: $carousel-caption-color;
    //   text-align: center;
    // }
  };

  _classes.carouselControlPrev = _classes.carouselControlNext = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: CAROUSEL_CONTROL_WIDTH,
    color: CAROUSEL_CAPTION_COLOR,
    textAlign: 'center',
    opacity: CAROUSEL_CONTROL_OPACITY,
    // reserved / @include transition($carousel-control-transition);

    // Hover/focus state
    // @include hover-focus() {
    //   color: $carousel-control-color;
    //   text-decoration: none;
    //   outline: 0;
    //   opacity: $carousel-control-hover-opacity;
    // }
  };

  _classes.carouselControlPrev = Object.assign(_classes.carouselControlPrev, {
    left: 0,
  }, ENABLE_GRADIENTS ? {
    // reserved / backgroundImage: linear-gradient(90deg, rgba($black, .25), rgba($black, .001));
  } : {});

  _classes.carouselControlNext = Object.assign(_classes.carouselControlNext, {
    right: 0,
  }, ENABLE_GRADIENTS ? {
    // reserved / background-image: linear-gradient(270deg, rgba($black, .25), rgba($black, .001));
  } : {});

  return _classes;
};
