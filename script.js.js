const menuToggle = document.querySelector ('.toggle');
const sidebar = document.querySelector ('.sidebar');

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
};