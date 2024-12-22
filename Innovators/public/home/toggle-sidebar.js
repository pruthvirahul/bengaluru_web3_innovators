document.addEventListener('DOMContentLoaded', () => {
    const sidebars = document.querySelectorAll('.sidebar');
    const contents = document.querySelectorAll('.content');

    sidebars.forEach(sidebar => {
        sidebar.classList.add('collapsed');
        
        sidebar.addEventListener('mouseenter', () => {
            sidebar.classList.remove('collapsed');
            const correspondingContent = document.querySelector('.content');
            if (correspondingContent) {
                correspondingContent.classList.remove('sidebar-collapsed');
            }
        });

        sidebar.addEventListener('mouseleave', () => {
            sidebar.classList.add('collapsed');
            const correspondingContent = document.querySelector('.content');
            if (correspondingContent) {
                correspondingContent.classList.add('sidebar-collapsed');
            }
        });
    });
});