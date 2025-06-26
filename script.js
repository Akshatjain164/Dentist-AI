// Dental conditions data
const dentalConditions = [
  {
    keywords: ["tooth infection", "pus in the tooth"],
    condition: "Tooth Infection (like pus in the tooth)",
    antibiotic: "Amoxicillin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["swollen gums", "gum infection"],
    condition: "Swollen Gums (Gum Infection)",
    antibiotic: "Metronidazole",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["tooth decay pain", "decay pain", "cavity pain"],
    condition: "Tooth Decay Pain",
    antibiotic: "Not needed unless infected",
    painRelief: "Diclofenac"
  },
  {
    keywords: ["after tooth removal", "simple extraction", "extraction pain"],
    condition: "After Tooth Removal (Simple Extraction)",
    antibiotic: "Azithromycin",
    painRelief: "Ketorolac"
  },
  {
    keywords: ["dry socket", "pain after tooth removal"],
    condition: "Dry Socket (Pain after Tooth Removal)",
    antibiotic: "Clindamycin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["mouth ulcer", "ulcers", "canker sore"],
    condition: "Mouth Ulcers",
    antibiotic: "Not needed",
    painRelief: "Lidocaine Gel (for local pain relief)"
  },
  {
    keywords: ["fungal infection", "white patches"],
    condition: "Fungal Infection in Mouth (White Patches)",
    antibiotic: "Not used",
    painRelief: "Clotrimazole (antifungal) + Paracetamol if painful"
  },
  {
    keywords: ["jaw pain", "muscle pain", "tmj"],
    condition: "Jaw Pain or Muscle Pain (like in TMJ problems)",
    antibiotic: "Not needed",
    painRelief: "Naproxen"
  },
  {
    keywords: ["broken tooth", "fractured tooth"],
    condition: "Broken Tooth with Pain",
    antibiotic: "Amoxicillin + Clavulanic acid",
    painRelief: "Tramadol"
  },
  {
    keywords: ["pain due to braces", "orthodontic pain", "braces pain"],
    condition: "Pain due to Braces or Orthodontic Treatment",
    antibiotic: "Not needed",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["swelling in face", "face swelling"],
    condition: "Swelling in Face Due to Tooth Infection",
    antibiotic: "Clindamycin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["bleeding gums", "gum bleed"],
    condition: "Bleeding Gums",
    antibiotic: "Doxycycline",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["bad breath", "halitosis"],
    condition: "Bad Breath Due to Gum Problems",
    antibiotic: "Metronidazole",
    painRelief: "Usually not needed"
  },
  {
    keywords: ["pain after root canal", "post root canal pain"],
    condition: "Pain After Root Canal",
    antibiotic: "Amoxicillin",
    painRelief: "Ketorolac"
  },
  {
    keywords: ["burning sensation in mouth", "burning mouth"],
    condition: "Burning Sensation in the Mouth",
    antibiotic: "Not needed",
    painRelief: "Lidocaine gel"
  },
  {
    keywords: ["wisdom tooth", "wisdom teeth coming out"],
    condition: "Pain from Wisdom Tooth Coming Out",
    antibiotic: "Azithromycin",
    painRelief: "Diclofenac"
  },
  {
    keywords: ["tooth fracture with sensitivity", "fracture sensitivity"],
    condition: "Tooth Fracture with Sensitivity",
    antibiotic: "Amoxicillin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["infection under crown", "crown infection"],
    condition: "Infection Under a Dental Crown",
    antibiotic: "Amoxicillin + Clavulanic acid",
    painRelief: "Tramadol"
  },
  {
    keywords: ["injury to mouth", "injury to lips", "mouth injury", "lip injury"],
    condition: "Injury to the Mouth or Lips",
    antibiotic: "Cephalexin",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["braces causing mouth sores", "braces mouth sores"],
    condition: "Braces Causing Mouth Sores",
    antibiotic: "Not needed",
    painRelief: "Lidocaine gel or mouth rinse"
  }
];

// Helper: Find best matching dental condition
function matchDentalCondition(symptoms) {
  const s = symptoms.toLowerCase();
  for (const cond of dentalConditions) {
    for (const kw of cond.keywords) {
      if (s.includes(kw)) {
        return cond;
      }
    }
  }
  return null;
}

function analyzeSymptoms(symptoms) {
  // Try to match with our data
  const matched = matchDentalCondition(symptoms);
  if (matched) {
    return {
      condition: matched.condition,
      info: "Based on your symptoms, here is some general information:",
      antibiotic: matched.antibiotic,
      painRelief: matched.painRelief
    };
  }

  // If not matched, fallback to previous logic
  const s = symptoms.toLowerCase();
  if (s.includes('toothache') || s.includes('tooth pain')) {
    if (s.includes('swelling') || s.includes('swollen')) {
      return {
        condition: "Possible Dental Abscess or Infection",
        info: "Your symptoms may indicate a dental infection or abscess, especially if there is swelling. This can become serious if left untreated.",
        tips: [
          "Apply a cold compress to the swollen area.",
          "Rinse your mouth with warm salt water.",
          "Take over-the-counter pain relievers if needed.",
          "Seek prompt dental care. Infections may require antibiotics or other treatments."
        ],
        emergency: s.includes('fever') || s.includes('difficulty') ? "If you have a fever, difficulty swallowing, or difficulty breathing, seek urgent medical care immediately." : null
      };
    }
    return {
      condition: "Possible Tooth Decay or Cavity",
      info: "A toothache is often caused by tooth decay, a cavity, or a cracked tooth.",
      tips: [
        "Keep the area clean; avoid very hot/cold foods.",
        "Rinse with warm salt water.",
        "Contact a dentist for an examination and possible treatment."
      ]
    };
  }

  if (s.includes('bleeding gums') || s.includes('gum bleed')) {
    return {
      condition: "Possible Gum Disease (Gingivitis/Periodontitis)",
      info: "Bleeding gums are often a sign of gum disease. Good oral hygiene can help, but a dental visit is recommended.",
      tips: [
        "Brush and floss gently but thoroughly twice a day.",
        "Use an antiseptic mouthwash.",
        "Schedule a dental cleaning and checkup."
      ]
    };
  }

  if (s.includes('sensitive') && (s.includes('cold') || s.includes('hot'))) {
    return {
      condition: "Tooth Sensitivity",
      info: "Sensitivity to cold or hot may be due to enamel erosion, receding gums, or a cavity.",
      tips: [
        "Use a toothpaste for sensitive teeth.",
        "Avoid acidic and very hot/cold foods.",
        "If symptoms persist, see a dentist."
      ]
    };
  }

  if (s.includes('wisdom tooth') || s.includes('wisdom teeth')) {
    return {
      condition: "Wisdom Tooth Problem",
      info: "Wisdom teeth can cause pain, swelling, or infection as they erupt.",
      tips: [
        "Rinse with warm salt water.",
        "Apply a cold compress for swelling.",
        "See a dentist—wisdom teeth may need to be monitored or removed."
      ]
    };
  }

  // Default response
  return {
    condition: "General Advice",
    info: "Dental symptoms can have many causes. It's important to maintain good oral hygiene and get regular dental checkups.",
    tips: [
      "Brush and floss regularly.",
      "Avoid sugary foods and drinks.",
      "See a dentist for persistent or severe symptoms."
    ]
  };
}

// Modern loading overlay show/hide
function showModernLoading(cb) {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.remove('hide');
  setTimeout(() => {
    overlay.classList.add('hide');
    setTimeout(cb, 600);
  }, 1200);
}

// Animate result panel when re-showing
function animateResultPanel(resultDiv) {
  resultDiv.style.animation = "none";
  // force reflow
  void resultDiv.offsetWidth;
  resultDiv.style.animation = "";
}

// Mascot smile and wink animation
function mascotSmile() {
  const mascot = document.getElementById('tooth-mascot');
  if (!mascot) return;
  mascot.classList.add('smile');
  setTimeout(() => mascot.classList.remove('smile'), 1800);
}
function mascotWink() {
  const mascot = document.getElementById('tooth-mascot');
  if (!mascot) return;
  mascot.classList.add('wink');
  setTimeout(() => mascot.classList.remove('wink'), 900);
}
// Mascot click handler
const mascot = document.getElementById('tooth-mascot');
if (mascot) {
  mascot.addEventListener('click', mascotWink);
  mascot.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') mascotWink(); });
}

// Typewriter effect for main advice only
function typewriterRevealAdvice(element, html, speed = 18) {
  // Only typewriter the first <div> (main info), then render the rest
  const match = html.match(/<div>(.*?)<\/div>([\s\S]*)/);
  if (!match) { element.innerHTML = html; return; }
  const main = match[1];
  const rest = match[2];
  element.innerHTML = '';
  let i = 0;
  function type() {
    if (i < main.length) {
      element.innerHTML += main.charAt(i);
      i++;
      setTimeout(type, main.charAt(i-1) === '<' ? 0 : speed);
    } else {
      element.innerHTML = `<div>${main}</div>` + rest;
    }
  }
  type();
}

// Show/hide reset button
function showResetBtn() {
  document.getElementById('reset-btn').classList.remove('hidden');
}
function hideResetBtn() {
  document.getElementById('reset-btn').classList.add('hidden');
}

document.getElementById('reset-btn').addEventListener('click', function() {
  document.getElementById('symptoms').value = '';
  document.getElementById('result').classList.add('hidden');
  hideResetBtn();
});

document.getElementById("symptomForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const symptoms = document.getElementById("symptoms").value.trim();
  const resultDiv = document.getElementById("result");
  if (!symptoms) {
    resultDiv.innerHTML = "Please describe your dental symptoms.";
    resultDiv.classList.remove("hidden");
    animateResultPanel(resultDiv);
    hideResetBtn();
    return;
  }

  showModernLoading(() => {
    const analysis = analyzeSymptoms(symptoms);
    let html = `<strong>${analysis.condition}</strong><br><div>${analysis.info}</div>`;
    if (analysis.antibiotic) {
      html += `<div class='antibiotic'><strong>Antibiotic:</strong> ${analysis.antibiotic}</div>`;
    }
    if (analysis.painRelief) {
      html += `<div class='pain-relief'><strong>Pain Relief:</strong> ${analysis.painRelief}</div>`;
    }
    if (analysis.tips) {
      html += `<ul>` + analysis.tips.map(t => `<li>${t}</li>`).join('') + `</ul>`;
    }
    if (analysis.emergency) {
      html += `<div class='emergency'>${analysis.emergency}</div>`;
    }
    resultDiv.classList.remove("hidden");
    animateResultPanel(resultDiv);
    typewriterRevealAdvice(resultDiv, html);
    // Subtle confetti only for positive results (no emergency)
    if (typeof launchConfetti === 'function' && !analysis.emergency) launchConfetti();
    mascotSmile();
    showResetBtn();
  });
});

// Hide loader on first load after 1.2s
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loading-overlay').classList.add('hide');
  }, 1200);
});