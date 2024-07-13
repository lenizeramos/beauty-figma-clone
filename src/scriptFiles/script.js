document.addEventListener("DOMContentLoaded", () => {
  const openSidebarButton = document.getElementById("openSidebar");
  const sidebar = document.getElementById("sidebar");

  openSidebar.addEventListener("click", (event) => {
    // console.log('clicked')
    sidebar.classList.add("open");
  });

  document.addEventListener("click", (event) => {
    if (
      !sidebar.contains(event.target) &&
      !openSidebarButton.contains(event.target)
    ) {
      // console.log('OUTSIDE click')
      sidebar.classList.remove("open");
    }
  });
});
