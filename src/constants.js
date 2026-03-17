import bioJointImg from './assets/images/BioJoint.png';
import reliefMaxImg from './assets/images/ReliefMax1.png';
import biocalXtImg from './assets/images/BiocalXt.png';
import lumbarMaxImg from './assets/images/LumbarMax.png';
import cervimaxImg from './assets/images/Cervimax.png';
import biocurminImg from './assets/images/Biocurmin.png';
import sunDImg from './assets/images/Sun-D.png';
import ovaseeImg from './assets/images/Ovasee.png';

export const PRODUCTS = [
  {
    id: "bio-joint",
    name: "Bio Joint",
    type: "Softgel Capsule",
    tagline: "Healthy Joints & Great Flexibility",
    description: "Bio Joint is a premium herbal formulation specifically designed to support joint health and mobility. It combines traditional Ayurvedic wisdom with modern extraction techniques to provide a comprehensive solution for those suffering from joint discomfort and stiffness.",
    benefits: [
      "Promotes long-term joint health and structural integrity",
      "Enhances flexibility and range of motion",
      "Reduces joint pain and inflammation naturally",
      "Strengthens bones and cartilages to prevent wear and tear",
      "Supports the body's natural repair mechanisms for connective tissues"
    ],
    composition: "Gandha Tailam , Guggulu(Commiphora mukul/wightii) , Shankha Bhasma(Boswellia serrata) , Shankha Bhasma(Turbinella rapa) , Haridra(Curcuma longa).",
    indications: "Osteoarthritis, Rheumatoid Arthritis, Chronic Joint Pain, Morning Stiffness, Sports Injuries related to joints.",
    dosage: "1-2 Softgel Capsules twice a day after meals or as directed by the Physician.",
    safety: "Store in a cool, dry place away from direct sunlight. Keep out of reach of children. Pregnant or lactating women should consult a physician before use.",
    image: bioJointImg
  },
  {
    id: "relief-max",
    name: "Relief Max",
    type: "Tablets",
    tagline: "Fast Relief for All Pain",
    description: "Relief Max is a powerful natural analgesic and anti-inflammatory tablet. It provides rapid relief from various types of musculoskeletal pain without the side effects.",
    benefits: [
      "Provides rapid relief from acute and chronic body pain",
      "Potent anti-inflammatory action reduces swelling and redness",
      "Improves motility and physical function in pain-affected areas",
      "Effective for back, neck, and shoulder pain",
      "Helps in managing sciatica and neuralgic pain"
    ],
    composition: "Sallaki (Boswellia Serrata) 250mg, Guggulu (Commiphora mukul) 150mg, Ashwagandha 100mg, Eranda (Ricinus communis) 50mg, Rasna 50mg.",
    indications: "General Body Ache, Muscular Strain, Sciatica, Spondylitis, Inflammatory Joint Disorders.",
    dosage: "2 Tablets twice a day as directed by the Physician.",
    safety: "Avoid use if you have a known allergy to any of the herbal ingredients. Not recommended for children under 12 years of age without medical supervision.",
    image: reliefMaxImg
  },
  {
    id: "biocal-xt",
    name: "Biocal-XT",
    type: "Tablets",
    tagline: "Calcium & Vitamin Supplement",
    description: "Biocal-XT is a high-absorption calcium supplement enriched with Vitamin D3 and essential minerals. It is formulated to maintain optimal bone density and support the skeletal system throughout different stages of life.",
    benefits: [
      "Supports the treatment and prevention of Osteoporosis",
      "Effectively treats Calcium and Vitamin D3 deficiency",
      "Improves Low Bone Mineral Density (BMD)",
      "Relieves chronic neck and back pain associated with bone weakness",
      "Utilizes a highly bioavailable vegetarian source of calcium"
    ],
    composition: "Calcium Carbonate (from Oyster Shell) 500mg, Vitamin D3 2000 IU, Magnesium Oxide 100mg, Zinc Sulphate 7.5mg.",
    indications: "Osteoporosis, Osteopenia, Calcium Deficiency, Pregnancy and Lactation, Post-menopausal bone health.",
    dosage: "1 Tablet daily after a major meal or as directed by the Physician.",
    safety: "Do not exceed the recommended daily dose. Individuals with a history of kidney stones should consult their doctor before starting supplementation.",
    image: biocalXtImg
  },
  {
    id: "lumbar-max",
    name: "Lumbar Max",
    type: "Softgel Capsule",
    tagline: "Lumbar Pain Support",
    description: "Lumbar Max is a specialized formulation targeting the lower back. It focuses on reducing nerve compression and inflammation in the lumbar region, helping patients regain their daily mobility.",
    benefits: [
      "Specifically targets and relieves pain in the axial spine",
      "Reduces numbness and tingling sensations in the lower limbs",
      "Effectively treats joint and muscular stiffness in the lumbar area",
      "Provides nutritional support for nerve compression issues",
      "Contains natural anti-inflammatory constituents for long-term relief"
    ],
    composition: "Ricinus(Eranda) , Sesamum(tila) , Vitex negundo(nirgundi) , Guggul , Shallaki(Boswellia serrata).",
    indications: "Lumbar Spondylosis, Lower Back Ache, Sciatica, Slip Disc (supportive therapy), Muscular strain in the back.",
    dosage: "one or two Softgel Capsule  per day or as directed by the Physician.",
    safety: "For adult use only. Store in a cool place away from direct sunlight. Consult a doctor if pain persists for more than 7 days.",
    image: lumbarMaxImg
  },
  {
    id: "cervi-max",
    name: "Cervi Max",
    type: "Softgel Capsule",
    tagline: "Cervical Pain Support",
    description: "Cervi Max is designed to address the unique challenges of cervical spine issues. It helps in relaxing the neck muscles and reducing the inflammation that leads to stiffness and headaches.",
    benefits: [
      "Relieves chronic stiff neck and associated tension headaches",
      "Reduces numbness and weakness in the arms and hands",
      "Acts as a natural analgesic for Cervical Spondylosis",
      "Improves the overall strength and flexibility of neck bones and joints",
      "Reduces localized inflammation and improves blood circulation"
    ],
    composition: "Rasna 100mg, Sunthi 100mg, Devadaru 100mg, Guggulu 100mg, Dashmool Extract 100mg.",
    indications: "Cervical Spondylosis, Stiff Neck, Brachial Neuralgia, Vertigo associated with neck issues.",
    dosage: "One or Two Softgel Capsule per day after meals or as directed by the Physician.",
    safety: "Discontinue use and consult a physician if any skin rash or irritation occurs. Not recommended during pregnancy without medical advice.",
    image: cervimaxImg
  },
  {
    id: "biocurmin",
    name: "Biocurmin",
    type: "Tablets",
    tagline: "95% Natural Curcumin Immunity Booster",
    description: "Biocurmin leverages the power of high-purity Curcuminoids to provide a massive boost to the body's natural defense system. It is formulated for maximum absorption to ensure the body receives the full antioxidant benefits.",
    benefits: [
      "Significantly boosts poor immunity and natural defenses",
      "Helps the body fight off recurrent infections",
      "Reduces chronic fatigue and generalized weakness",
      "Suppresses pro-inflammatory cytokines to manage systemic inflammation",
      "Enhanced with Piperine for 2000% higher bioavailability"
    ],
    composition: "Amla Extract,Ashwagandha Extract,ond,Curcumin , Vitamin C & Zinc Oxide.",
    indications: "Low Immunity, Chronic Inflammatory Conditions, Viral Infections (supportive), General Wellness and Longevity.",
    dosage: "Morining 1 , Night 1 as directed by the Physician.",
    safety: "Individuals taking blood-thinning medications should consult their physician before use. Curcumin may interfere with certain chemotherapy drugs.",
    image: biocurminImg
  },
  {
    id: "sun-d",
    name: "Sun-D",
    type: "Tablets",
    tagline: "Vitamin D3 5000 IU",
    description: "Sun-D provides a high-potency dose of Vitamin D3 derived from a sustainable, plant-based Lichen source. It is essential for those with limited sun exposure or those needing to rapidly correct a deficiency.",
    benefits: [
      "Essential for maintaining strong bone and joint health",
      "Provides a critical boost to the immune system",
      "Significantly improves the absorption of calcium from the diet",
      "Supports healthy cardiac and nervous system function",
      "100% Vegan and Natural Lichen-based D3 source"
    ],
    composition: "Vitamin D3 (Lichen) 5000 IU.",
    indications: "Vitamin D Deficiency, Rickets support, Osteomalacia, Low Immunity, Seasonal Affective Disorder.",
    dosage: "Morning 1 & Night 1 Tablet or as directed by the Physician.",
    safety: "Periodic monitoring of serum 25-hydroxyvitamin D levels is recommended for long-term high-dose supplementation. Store in a cool, dark place.",
    image: sunDImg
  },
  {
    id: "ovasee",
    name: "Ovasee",
    type: "Tablets",
    tagline: "Women's Care & Hormonal Balance",
    description: "Ovasee is a specialized formulation designed to support women's reproductive health. It helps in maintaining hormonal balance and supports overall well-being during various phases of a woman's life.",
    benefits: [
      "Supports natural hormonal balance in women",
      "Helps regulate the menstrual cycle effectively",
      "Enhances reproductive health and vitality",
      "Reduces symptoms associated with PCOS and PCOD",
      "Improves energy levels and overall female wellness"
    ],
    composition: "Myo-inositol , L-methyl folate , Vitamin D3 , Cyanocobalamin , L-Arginine.",
    indications: "Irregular Menstrual Cycle, Hormonal Imbalance, female infertility , PCOS, General weakness in women.",
    dosage: "1 Tablet twice a day or as directed by the Physician.",
    safety: "Consult a gynecologist before use if pregnant or nursing. Store in a cool, dry place away from direct sunlight.",
    image: ovaseeImg
  },
  {
    id: "ovasee",
    name: "Ovasee",
    type: "Tablets",
    tagline: "Women's Care & Hormonal Balance",
    description: "Ovasee is a specialized formulation designed to support women's reproductive health. It helps in maintaining hormonal balance and supports overall well-being during various phases of a woman's life.",
    benefits: [
      "Supports natural hormonal balance in women",
      "Helps regulate the menstrual cycle effectively",
      "Enhances reproductive health and vitality",
      "Reduces symptoms associated with PCOS and PCOD",
      "Improves energy levels and overall female wellness"
    ],
    composition: "Myo-inositol , L-methyl folate , Vitamin D3 , Cyanocobalamin , L-Arginine.",
    indications: "Irregular Menstrual Cycle, Hormonal Imbalance, female infertility , PCOS, General weakness in women.",
    dosage: "1 Tablet twice a day or as directed by the Physician.",
    safety: "Consult a gynecologist before use if pregnant or nursing. Store in a cool, dry place away from direct sunlight.",
    image: ovaseeImg
  }
];

