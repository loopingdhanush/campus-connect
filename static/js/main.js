// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
});

// Delete project functionality
document.querySelectorAll('.delete-project').forEach(button => {
    button.addEventListener('click', async (e) => {
        e.preventDefault();
        
        if (!confirm('Are you sure you want to delete this project?')) {
            return;
        }

        const projectId = button.dataset.projectId;
        try {
            const response = await fetch(`/delete_project/${projectId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                const projectCard = button.closest('.project-card');
                projectCard.style.opacity = '0';
                projectCard.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    projectCard.remove();
                    // Show success message
                    const alert = document.createElement('div');
                    alert.className = 'alert success';
                    alert.textContent = 'Project deleted successfully';
                    document.querySelector('.container').insertBefore(alert, document.querySelector('.profile-container'));
                    setTimeout(() => alert.remove(), 3000);
                }, 300);
            } else {
                throw new Error('Failed to delete project');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to delete project. Please try again.');
        }
    });
});

// Form validation and animation
document.querySelectorAll('form').forEach(form => {
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        // Add focus animation
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        // Validate on input
        input.addEventListener('input', () => {
            if (input.required && !input.value) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        });
    });
});

// Smooth scroll to top
const scrollToTop = document.createElement('button');
scrollToTop.className = 'scroll-to-top';
scrollToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(scrollToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
});

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 