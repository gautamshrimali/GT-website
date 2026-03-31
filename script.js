// Mobile Menu
document.querySelector('.hamburger').addEventListener('click', () => { document.querySelector('.hamburger').classList.toggle('active'); document.querySelector('.nav-menu').classList.toggle('active'); });

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', e => { e.preventDefault(); document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' }); }));

// DATA
const teamData = [{ name: "Shubman Gill", role: "Captain", img: "assets/images/Shubman Gill.webp" }, { name: "Rashid Khan", role: "Spinner", img: "assets/images/Rashid Khan.webp" }, { name: "Jos Buttler", role: "Wicket Keepers", img: "assets/images/Jos Buttler.webp" }, { name: "Sai Sudharsan", role: "Batsman", img: "assets/images/Sai Sudharsan.webp" }, { name: "Rahul Tewatia", role: "All-Rounders", img: "assets/images/Rahul Tewatia.webp" }, { name: "Kagiso Rabada", role: "Fast Bowler", img: "assets/images/Kagiso Rabada.webp" }];

const upcoming = [
    { vs: "vs PBKS", date: "31 Mar", time: "7:30PM", venue: "New Chandigarh" },
    { vs: "vs RR", date: "4 Apr", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs DC", date: "8 Apr", time: "7:30PM", venue: "Delhi" },
    { vs: "vs LSG", date: "12 Apr", time: "3:30PM", venue: "Lucknow" },
    { vs: "vs KKR", date: "17 Apr", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs MI", date: "20 Apr", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs RCB", date: "24 Apr", time: "7:30PM", venue: "Bengaluru" },
    { vs: "vs CSK", date: "26 Apr", time: "3:30PM", venue: "Ahmedabad" },
    { vs: "vs RCB", date: "30 Apr", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs PBKS", date: "3 May", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs RR", date: "9 May", time: "7:30PM", venue: "Jaipur" },
    { vs: "vs SRH", date: "12 May", time: "7:30PM", venue: "Ahmedabad" },
    { vs: "vs KKR", date: "16 May", time: "7:30PM", venue: "Kolkata" },
    { vs: "vs CSK", date: "21 May", time: "7:30PM", venue: "Chennai" }
];
const results = [{ vs: "vs PBKS", date: "31 Mar", result: "Upcoming" },];

// Load Team
function loadTeam() { document.getElementById('teamGrid').innerHTML = teamData.map(p => `<div class="team-card"><img src="${p.img}"><h3>${p.name}</h3><div class="role">${p.role}</div></div>`).join(''); }

// Load Schedule
function loadUpcoming() { document.getElementById('upcoming').innerHTML = upcoming.map(m => `<div class="match-card"><div><h4>GT ${m.vs}</h4><div>${m.date} | ${m.time}</div><div>${m.venue}</div></div></div>`).join(''); }
function loadResults() { document.getElementById('recent').innerHTML = results.map(m => `<div class="match-card"><div><h4>GT ${m.vs}</h4><div style="color:#FF6B35;font-weight:700;">${m.result}</div></div></div>`).join(''); }

// Tabs
document.querySelectorAll('.tab-btn').forEach(b => b.addEventListener('click', () => { document.querySelectorAll('.tab-btn').forEach(x => x.classList.remove('active')); document.querySelectorAll('.tab-pane').forEach(x => x.classList.remove('active')); b.classList.add('active'); document.getElementById(b.dataset.tab).classList.add('active'); }));

// Gallery
document.getElementById('galleryGrid').innerHTML = ['assets/images/200.jpg', 'assets/images/40.jpg', 'assets/images/event.png', 'assets/images/stadium-bg.jpg',  'assets/images/winer.png', 'assets/images/400.png'].map(i => `<div class="gallery-item"><img src="${i}"></div>`).join('');

// Init
document.addEventListener('DOMContentLoaded', () => {
    loadTeam(); loadUpcoming(); loadResults();
    document.querySelector('.btn-large').addEventListener('click', () => alert('🎟️ Tickets Booked!'));
});