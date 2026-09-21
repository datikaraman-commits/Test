const planData = {
  minecraft: {
    budget: [
      ["⛏","Starter","₹49","2 GB RAM","1 vCPU","10 GB NVMe"],
      ["⚔","Survival","₹99","4 GB RAM","2 vCPU","25 GB NVMe"],
      ["🔥","Advanced","₹149","6 GB RAM","3 vCPU","40 GB NVMe"]
    ],
    powerful: [
      ["⚡","Titan","₹299","8 GB RAM","4 vCPU","80 GB NVMe"],
      ["🚀","Beast","₹499","12 GB RAM","6 vCPU","120 GB NVMe"],
      ["🔥","Ultra","₹799","16 GB RAM","8 vCPU","200 GB NVMe"]
    ]
  },
  vps: {
    budget: [
      ["☁","VPS Basic","₹199","2 GB RAM","1 vCPU","30 GB NVMe"],
      ["⚡","VPS Pro","₹399","4 GB RAM","2 vCPU","60 GB NVMe"],
      ["🚀","VPS Max","₹699","8 GB RAM","4 vCPU","100 GB NVMe"]
    ],
    powerful: [
      ["⚡","VPS Power","₹799","8 GB RAM","4 vCPU","120 GB NVMe"],
      ["🚀","VPS Pro","₹1199","16 GB RAM","6 vCPU","200 GB NVMe"],
      ["🔥","VPS Ultra","₹1799","32 GB RAM","8 vCPU","400 GB NVMe"]
    ]
  },
  bots: {
    budget: [
      ["🤖","Bot Mini","₹29","512 MB RAM","1 vCPU","5 GB NVMe"],
      ["🤖","Bot Plus","₹79","2 GB RAM","1 vCPU","15 GB NVMe"],
      ["⚡","Bot Pro","₹149","4 GB RAM","2 vCPU","30 GB NVMe"]
    ],
    powerful: [
      ["⚡","Bot Power","₹199","4 GB RAM","2 vCPU","30 GB NVMe"],
      ["🚀","Bot Pro","₹349","8 GB RAM","4 vCPU","60 GB NVMe"],
      ["🔥","Bot Ultra","₹599","16 GB RAM","6 vCPU","100 GB NVMe"]
    ]
  }
};

function renderPlans(category, type) {
  const container = document.getElementById(category + "-plans");
  const plans = planData[category][type];

  container.innerHTML = plans.map((plan, index) => `
    <div class="plan-card ${index === 1 ? "featured" : ""}">
      ${index === 1 ? '<div class="popular">POPULAR</div>' : ''}
      <div class="plan-icon">${plan[0]}</div>
      <h3>${plan[1]}</h3>
      <div class="price">${plan[2]} <small>/month</small></div>
      <ul>
        <li>✓ ${plan[3]}</li>
        <li>✓ ${plan[4]}</li>
        <li>✓ ${plan[5]}</li>
        <li>✓ 1 Gbps Network</li>
        <li>✓ DDoS Protection</li>
      </ul>
      <button onclick="order('${plan[1]}')">Order Now</button>
    </div>
  `).join("");
}

function showPlans(category, type, button) {
  button.parentElement.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  renderPlans(category, type);
}

function order(plan) {
  alert(`You selected: ${plan}

This is a frontend-only demo. Checkout can be connected later.`);
}

function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => document.getElementById("nav").classList.remove("active"));
});

renderPlans("minecraft", "budget");
renderPlans("vps", "budget");
renderPlans("bots", "budget");
