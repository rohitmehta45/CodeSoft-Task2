function filterJobs() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const jobListings = document.querySelectorAll('.job');

    jobListings.forEach(job => {
        const title = job.querySelector('h2').textContent.toLowerCase();
        const company = job.querySelector('p').textContent.toLowerCase();

        if (title.includes(searchInput) || company.includes(searchInput)) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
}
