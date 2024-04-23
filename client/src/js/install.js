const appInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  appInstall.classList.toggle('hidden', false);
});
appInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  appInstall.classList.toggle('hidden', true);
});
window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});