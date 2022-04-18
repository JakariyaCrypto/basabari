  // menu active

const profileIcon = document.getElementById('profile-icon');
const profileContent = document.getElementById('profile-content');

if (profileIcon) {
  profileIcon.addEventListener('click', () => {
    profileContent.classList.toggle('active-profile');
  });
}