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
  
  const matched = matchDentalCondition(symptoms);
  if (matched) {
    return {
      condition: matched.condition,
      info: "Based on your symptoms, here is some general information:",
      antibiotic: matched.antibiotic,
      painRelief: matched.painRelief
    };
  }


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


function showLoadingOverlay(cb) {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.remove('hide');
  setTimeout(() => {
    overlay.classList.add('hide');
    setTimeout(() => {
      cb();
    }, 600); 
  }, 1300);
}


function animateResultPanel(resultDiv) {
  resultDiv.style.animation = "none";
  
  void resultDiv.offsetWidth;
  resultDiv.style.animation = "";
}

document.getElementById("symptomForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const symptoms = document.getElementById("symptoms").value.trim();
  const resultDiv = document.getElementById("result");
  if (!symptoms) {
    resultDiv.innerHTML = "Please describe your dental symptoms.";
    resultDiv.classList.remove("hidden");
    animateResultPanel(resultDiv);
    return;
  }

  showLoadingOverlay(() => {
    const analysis = analyzeSymptoms(symptoms);
    let html = `<strong>Condition:</strong> ${analysis.condition}<br>`;
    html += `<div style="margin-top:8px;"><strong>Info:</strong> ${analysis.info}</div>`;

   
    if (analysis.antibiotic !== undefined && analysis.painRelief !== undefined) {
      html += `<span class="antibiotic"><strong>Antibiotic:</strong> ${analysis.antibiotic}</span>`;
      html += `<span class="pain-relief"><strong>Pain Relief:</strong> ${analysis.painRelief}</span>`;
    }

    if (analysis.tips) {
      html += `<div style="margin-top:8px;"><strong>Tips:</strong><ul>`;
      analysis.tips.forEach(tip => {
        html += `<li>${tip}</li>`;
      });
      html += `</ul></div>`;
    }
    if (analysis.emergency) {
      html += `<div class="emergency">${analysis.emergency}</div>`;
    }
    resultDiv.innerHTML = html;
    resultDiv.classList.remove("hidden");
    animateResultPanel(resultDiv);
  });
});


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('loading-overlay').classList.add('hide');
  }, 2500);
});

function showLoadingOverlay(cb) {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.remove('hide');
  setTimeout(() => {
    overlay.classList.add('hide');
    setTimeout(() => {
      cb();
    }, 600); 
  }, 1500); 
}
