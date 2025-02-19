// Prevent right click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Prevent keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if(e.key === 'F12' || 
       (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) ||
       (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
       (e.ctrlKey && (e.key === 'U' || e.key === 'u'))) {
        e.preventDefault();
        return false;
    }
});

// Subtle DevTools detection
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
        window.location.reload();
    }
}, 1000);
