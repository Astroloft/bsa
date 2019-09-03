jQuery(".owl-carousel").on("initialized.owl.carousel", () => {
  setTimeout(() => {
    jQuery(".owl-item.active .owl-slide-animated").addClass("is-transitioned");
    jQuery("section").show();
  }, 200);
});

const jQueryowlCarousel = jQuery(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: [
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
    '<svg width="50" height="50" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>' /* icons from https://iconmonstr.com */
  ]
});

jQueryowlCarousel.on("changed.owl.carousel", e => {
  jQuery(".owl-slide-animated").removeClass("is-transitioned");

  const jQuerycurrentOwlItem = jQuery(".owl-item").eq(e.item.index);
  jQuerycurrentOwlItem.find(".owl-slide-animated").addClass("is-transitioned");

  const jQuerytarget = jQuerycurrentOwlItem.find(".owl-slide-text");
  doDotsCalculations(jQuerytarget);
});

jQueryowlCarousel.on("resize.owl.carousel", () => {
  setTimeout(() => {
    setOwlDotsPosition();
  }, 50);
});

/*if there isn't content underneath the carousel*/
//jQueryowlCarousel.trigger("refresh.owl.carousel");

setOwlDotsPosition();

function setOwlDotsPosition() {
  const jQuerytarget = jQuery(".owl-item.active .owl-slide-text");
  doDotsCalculations(jQuerytarget);
}

function doDotsCalculations(el) {
  const height = el.height();
  const {top, left} = el.position();
  const res = height + top + 20;

  jQuery(".owl-carousel .owl-dots").css({
    top: `jQuery{res}px`,
    left: `jQuery{left}px`
  });
}
