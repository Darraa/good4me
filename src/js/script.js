// ----------------------- Burger-menu-----------------------
const burger = document.querySelector(".burger");
const headerMenu = document.querySelector(".main__nav-list");

burger.addEventListener("click", function () {
   this.classList.toggle("active");
   headerMenu.classList.toggle("open");
});



const animItems = document.querySelectorAll(".anim-items");

if (animItems.length > 0) {
   window.addEventListener("scroll", animOnscroll);
   function animOnscroll() {
      for (let i = 0; i < animItems.length; i++) {
         const animItem = animItems[i],
            animItemHeight = animItem.offsetHeight,
            animItemOffset = offset(animItem).top,
            animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;
         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }

         if (
            scrollY > animItemOffset - animItemPoint &&
            scrollY < animItemOffset + animItemHeight
         ) {
            animItem.classList.add("active");
         } else {
            if (!animItem.classList.contains("anim-stop")) {
               animItem.classList.remove("active");
            }
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.scrollX || document.documentElement.scrollLeft,
         scrollTop = window.scrollY || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
   }
}
