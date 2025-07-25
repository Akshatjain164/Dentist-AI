// Dental conditions data (sorted, structured, and complete)
const dentalConditions = [
  {
    keywords: ["bad breath", "halitosis"],
    condition: "Bad Breath Due to Gum Problems",
    info: "Bad breath is often caused by gum disease or poor oral hygiene.",
    tips: [
      "Brush and floss regularly.",
      "Use an antibacterial mouthwash.",
      "Visit your dentist for a cleaning."
    ],
    antibiotic: "Metronidazole",
    painRelief: "Usually not needed"
  },
  {
    keywords: ["bleeding gums", "gum bleed"],
    condition: "Bleeding Gums",
    info: "Bleeding gums are often a sign of gum disease. Good oral hygiene can help, but a dental visit is recommended.",
    tips: [
      "Brush and floss gently but thoroughly twice a day.",
      "Use an antiseptic mouthwash.",
      "Schedule a dental cleaning and checkup."
    ],
    antibiotic: "Doxycycline",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["braces causing mouth sores", "braces mouth sores"],
    condition: "Braces Causing Mouth Sores",
    info: "Braces can sometimes cause mouth sores due to irritation.",
    tips: [
      "Use orthodontic wax on brackets.",
      "Rinse with salt water.",
      "Apply lidocaine gel for pain relief."
    ],
    antibiotic: "Not needed",
    painRelief: "Lidocaine gel or mouth rinse"
  },
  {
    keywords: ["broken tooth", "fractured tooth"],
    condition: "Broken Tooth with Pain",
    info: "A broken or fractured tooth can cause significant pain and may require urgent dental care.",
    tips: [
      "Rinse your mouth with warm water.",
      "Apply a cold compress to reduce swelling.",
      "See a dentist as soon as possible."
    ],
    antibiotic: "Amoxicillin + Clavulanic acid",
    painRelief: "Tramadol"
  },
  {
    keywords: ["dry socket", "pain after tooth removal"],
    condition: "Dry Socket (Pain after Tooth Removal)",
    info: "Dry socket is a painful complication after tooth extraction.",
    tips: [
      "Rinse gently with salt water.",
      "Avoid smoking or using straws.",
      "See your dentist for treatment."
    ],
    antibiotic: "Clindamycin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["fungal infection", "white patches"],
    condition: "Fungal Infection in Mouth (White Patches)",
    info: "Fungal infections like oral thrush cause white patches in the mouth.",
    tips: [
      "Maintain good oral hygiene.",
      "Use prescribed antifungal medication.",
      "Rinse mouth after using inhalers."
    ],
    antibiotic: "Not used",
    painRelief: "Clotrimazole (antifungal) + Paracetamol if painful"
  },
  {
    keywords: ["infection under crown", "crown infection"],
    condition: "Infection Under a Dental Crown",
    info: "Infection under a crown can cause pain and swelling.",
    tips: [
      "Keep the area clean.",
      "Avoid chewing on the affected side.",
      "See your dentist for evaluation."
    ],
    antibiotic: "Amoxicillin + Clavulanic acid",
    painRelief: "Tramadol"
  },
  {
    keywords: ["injury to mouth", "injury to lips", "mouth injury", "lip injury"],
    condition: "Injury to the Mouth or Lips",
    info: "Injuries to the mouth or lips can lead to bleeding, swelling, or infection.",
    tips: [
      "Apply gentle pressure to stop bleeding.",
      "Use a cold compress for swelling.",
      "Seek medical attention if severe."
    ],
    antibiotic: "Cephalexin",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["jaw pain", "muscle pain", "tmj"],
    condition: "Jaw Pain or Muscle Pain (like in TMJ problems)",
    info: "Jaw pain can be due to TMJ disorders, muscle strain, or injury.",
    tips: [
      "Apply a warm compress to the jaw.",
      "Avoid hard or chewy foods.",
      "See a dentist if pain persists."
    ],
    antibiotic: "Not needed",
    painRelief: "Naproxen"
  },
  {
    keywords: ["mouth ulcer", "ulcers", "canker sore"],
    condition: "Mouth Ulcers",
    info: "Mouth ulcers are small, painful sores inside the mouth.",
    tips: [
      "Avoid spicy or acidic foods.",
      "Use a mouth rinse recommended by your dentist.",
      "Apply lidocaine gel for pain relief."
    ],
    antibiotic: "Not needed",
    painRelief: "Lidocaine Gel (for local pain relief)"
  },
  {
    keywords: ["pain after root canal", "post root canal pain"],
    condition: "Pain After Root Canal",
    info: "Some discomfort after a root canal is normal, but severe pain may indicate a problem.",
    tips: [
      "Take prescribed pain medication.",
      "Avoid chewing on the treated tooth.",
      "Contact your dentist if pain persists."
    ],
    antibiotic: "Amoxicillin",
    painRelief: "Ketorolac"
  },
  {
    keywords: ["pain due to braces", "orthodontic pain", "braces pain"],
    condition: "Pain due to Braces or Orthodontic Treatment",
    info: "Braces can cause discomfort, especially after adjustments.",
    tips: [
      "Eat soft foods.",
      "Use orthodontic wax to cover sharp edges.",
      "Take over-the-counter pain relievers."
    ],
    antibiotic: "Not needed",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["swelling in face", "face swelling"],
    condition: "Swelling in Face Due to Tooth Infection",
    info: "Facial swelling from a tooth infection can be serious and may require urgent care.",
    tips: [
      "Apply a cold compress to the area.",
      "Take prescribed antibiotics.",
      "Seek immediate dental or medical attention."
    ],
    antibiotic: "Clindamycin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["swollen gums", "gum infection"],
    condition: "Swollen Gums (Gum Infection)",
    info: "Swollen gums are often a sign of infection or poor oral hygiene.",
    tips: [
      "Rinse with warm salt water.",
      "Brush and floss gently.",
      "Visit your dentist for evaluation."
    ],
    antibiotic: "Metronidazole",
    painRelief: "Paracetamol"
  },
  {
    keywords: ["tooth decay pain", "decay pain", "cavity pain"],
    condition: "Tooth Decay Pain",
    info: "Pain from tooth decay or cavities can be sharp or dull and may worsen with sweets or temperature changes.",
    tips: [
      "Avoid sugary foods and drinks.",
      "Keep the area clean.",
      "See a dentist for treatment."
    ],
    antibiotic: "Not needed unless infected",
    painRelief: "Diclofenac"
  },
  {
    keywords: ["tooth fracture with sensitivity", "fracture sensitivity"],
    condition: "Tooth Fracture with Sensitivity",
    info: "A fractured tooth can cause sensitivity to hot, cold, or sweet foods.",
    tips: [
      "Avoid chewing on the affected side.",
      "Use a desensitizing toothpaste.",
      "See your dentist promptly."
    ],
    antibiotic: "Amoxicillin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["tooth infection", "pus in the tooth"],
    condition: "Tooth Infection (like pus in the tooth)",
    info: "A tooth infection can cause pain, swelling, and pus formation. It requires prompt dental care.",
    tips: [
      "Rinse with warm salt water.",
      "Take prescribed antibiotics.",
      "Seek urgent dental treatment."
    ],
    antibiotic: "Amoxicillin",
    painRelief: "Ibuprofen"
  },
  {
    keywords: ["after tooth removal", "simple extraction", "extraction pain"],
    condition: "After Tooth Removal (Simple Extraction)",
    info: "Some pain after tooth extraction is normal, but severe pain may indicate complications.",
    tips: [
      "Bite gently on gauze to stop bleeding.",
      "Avoid rinsing vigorously for 24 hours.",
      "Take prescribed pain medication."
    ],
    antibiotic: "Azithromycin",
    painRelief: "Ketorolac"
  },
  {
    keywords: ["wisdom tooth", "wisdom teeth coming out"],
    condition: "Pain from Wisdom Tooth Coming Out",
    info: "Erupting wisdom teeth can cause pain, swelling, or infection.",
    tips: [
      "Rinse with warm salt water.",
      "Apply a cold compress for swelling.",
      "See a dentist for evaluation."
    ],
    antibiotic: "Azithromycin",
    painRelief: "Diclofenac"
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
      info: matched.info,
      tips: matched.tips,
      antibiotic: matched.antibiotic,
      painRelief: matched.painRelief
    };
  }

  // If not matched, fallback to a generic response with all fields
  return {
    condition: "General Advice",
    info: "Dental symptoms can have many causes. It's important to maintain good oral hygiene and get regular dental checkups.",
    tips: [
      "Brush and floss regularly.",
      "Avoid sugary foods and drinks.",
      "See a dentist for persistent or severe symptoms."
    ],
    antibiotic: "Consult a dentist for specific recommendations.",
    painRelief: "Over-the-counter pain relievers (e.g., paracetamol, ibuprofen)"
  };
}

// Modern loading overlay show/hide
function showModernLoading(cb) {
  const overlay = document.getElementById('loading-overlay');
  if (!overlay) { cb(); return; }
  overlay.classList.remove('hide');
  setTimeout(() => {
    overlay.classList.add('hide');
    setTimeout(cb, 600);
  }, 1200);
}

// Animate result panel when re-showing
function animateResultPanel(resultDiv) {
  if (!resultDiv) return;
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

// Typewriter effect for main advice only
function typewriterRevealAdvice(element, html, speed = 18) {
  if (!element) return;
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
  const btn = document.getElementById('reset-btn');
  if (btn) btn.classList.remove('hidden');
}
function hideResetBtn() {
  const btn = document.getElementById('reset-btn');
  if (btn) btn.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
  // Mascot event listeners
  const mascot = document.getElementById('tooth-mascot');
  if (mascot) {
    mascot.addEventListener('click', mascotWink);
    mascot.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') mascotWink(); });
  }

  const resetBtn = document.getElementById('reset-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      const symptoms = document.getElementById('symptoms');
      const result = document.getElementById('result');
      if (symptoms) {
        symptoms.value = '';
        symptoms.focus(); // Autofocus after reset
      }
      if (result) result.classList.add('hidden');
      hideResetBtn();
      // Hide copy button
      const copyBtn = document.getElementById('copy-btn');
      if (copyBtn) copyBtn.style.display = 'none';
    });
  }

  const form = document.getElementById("symptomForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const symptoms = document.getElementById("symptoms");
      const resultDiv = document.getElementById("result");
      if (!symptoms || !resultDiv) return;
      const symptomsValue = symptoms.value.trim();
      if (!symptomsValue) {
        resultDiv.innerHTML = "Please describe your dental symptoms.";
        resultDiv.classList.remove("hidden");
        animateResultPanel(resultDiv);
        hideResetBtn();
        return;
      }

      showModernLoading(() => {
        const analysis = analyzeSymptoms(symptomsValue);
        let html = `<strong>${analysis.condition}</strong><br><div>${analysis.info}</div>`;
        if (analysis.antibiotic) {
          html += `<div class='antibiotic'><strong>Antibiotic:</strong> ${analysis.antibiotic}</div>`;
        }
        if (analysis.painRelief) {
          html += `<div class='pain-relief'><strong>Pain Relief:</strong> ${analysis.painRelief}</div>`;
        }
        if (analysis.tips && analysis.tips.length) {
          html += `<ul>` + analysis.tips.map(t => `<li>${t}</li>`).join('') + `</ul>`;
        }
        if (analysis.emergency) {
          html += `<div class='emergency'>${analysis.emergency}</div>`;
        }
        // General advice icon and style
        const generalIcon = document.getElementById("general-advice-icon");
        if (analysis.condition === "General Advice") {
          resultDiv.classList.add("general-advice");
          if (generalIcon) generalIcon.style.display = "inline-block";
        } else {
          resultDiv.classList.remove("general-advice");
          if (generalIcon) generalIcon.style.display = "none";
        }
        // Pop effect
        resultDiv.classList.add("pop-effect");
        setTimeout(() => resultDiv.classList.remove("pop-effect"), 600);
        resultDiv.classList.remove("hidden");
        animateResultPanel(resultDiv);
        typewriterRevealAdvice(resultDiv, html);
        // Subtle confetti only for positive results (no emergency)
        if (typeof launchConfetti === 'function' && !analysis.emergency) launchConfetti();
        mascotSmile();
        showResetBtn();
        // Show copy button
        const copyBtn = document.getElementById('copy-btn');
        if (copyBtn) copyBtn.style.display = 'block';
      });
    });
  }

  // Hide loader on first load after 1.2s
  setTimeout(() => {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.add('hide');
  }, 1200);

  // Copy to clipboard functionality
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', function() {
      const resultDiv = document.getElementById('result');
      if (resultDiv) {
        // Remove icon from copy
        let text = resultDiv.innerText;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.innerText = 'Copied!';
          setTimeout(() => { copyBtn.innerText = 'Copy Advice'; }, 1200);
        });
      }
    });
  }
});