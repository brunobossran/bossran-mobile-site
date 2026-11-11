const communityMenu = document.querySelector('.community-menu');
document.addEventListener('click', event => {
  if (!communityMenu.contains(event.target) || event.target.closest('.community-menu a')) communityMenu.open = false;
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && communityMenu.open) {
    communityMenu.open = false;
    communityMenu.querySelector('summary').focus();
  }
});
