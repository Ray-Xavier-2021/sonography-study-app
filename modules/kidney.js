const title = 'Kidney Pathology';

const questions  = [

  {
    number: 1,
    type: 'multiple-choice',
    question: 'Simple renal cysts can occur int the:',
    answer: 'Cortex, medulla or renal sinus',
    score: 0,
    options: [
      {text: 'Cortex, medulla or renal sinus', isCorrect: true},
      {text: "Cortex, bowman's capsule or renal sinus", isCorrect: false},
      {text: 'Cortex, loops or henle or renal sinus', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 2,
    type: 'multiple-choice',
    question: 'Cortical cysts are locate at the:',
    answer: 'Periphery of the kidney',
    score: 0,
    options: [
      {text: 'Center of the kidney', isCorrect: false},
      {text: 'Periphery of the kidney', isCorrect: true},
      {text: 'Ectopic location of the kidney', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 3,
    type: 'true-false',
    question: 'A complex cysts is considered malignant until proven benign',
    answer: 'True',
    score: 0,
    explanation: "If a renal cysts does not meet all of the criteria for a simple cyst, it is termed complex and must be considered malignant until proven otherwise.",
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 4,
    type:'fill-in',
    question: 'What is the MOST common cause of an abdominal mass in newborns?',
    answer: 'multicystic displastic kidney',
    score: 0,
    options: [
      {text: 'multicystic displastic kidney', isCorrect: true}
    ]
  },
  {
    number: 5,
    type: 'multiple-choice',
    question: 'Most simple cortical cysts are originated from the:',
    answer:'Tubules',
    score: 0,
    options: [
      {text: 'Medulla', isCorrect: false},
      {text: 'Tubules', isCorrect: true},
      {text: 'acurate artery', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 6,
    type: 'multiple-choice',
    question: 'Parapelvic cysts are:',
    answer: 'Cortical cuts that bulge into central sinus',
    score: 0,
    options: [
      {text: 'Divertcula in the central sinus', isCorrect: false},
      {text: 'Located in the medulla', isCorrect: false},
      {text: 'Lympathic cysts located in the central sinus', isCorrect: false},
      {text: 'Cortical cuts that bulge into central sinus', isCorrect: true}
      
    ]
  },
  {
    number: 7,
    type: 'multiple-choice',
    question: 'An atypical cysts appearance is described as:',
    answer: 'Single thin septation, minimal wall calcification and internal echoes',
    score: 0,
    options: [
      {text: 'Single thin septation, minimal wall calcification and internal echoes', isCorrect: true},
      {text: 'Single thick septation, no wall calcification and internal echoes', isCorrect: false},
      {text: 'Single thin septation, minimal wall calcification and no internal echoes', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
      
    ]
  },
  {
    number: 8,
    type: 'true-false',
    question: 'Adult Autosomal Dominant Polycystic Kidney Disease destroys the renal tissue and leads to renal failure and hypertension',
    answer: 'True',
    explanation: "The adult dominant form of polycystic kidney disease usually appears during middle age. On rare occasions, however, it has been reported in a young infant. More typically the disease becomes manifest during the fourth decade of adulthood, with hypertension, hematuria, and enlarged kidneys",
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 9,
    type: 'true-false',
    question: 'Infantile Autosomal Recessive Polycystic Kidney Disease is a rare disorder related to chromosome 5',
    answer: 'False',
    explanation: "Autosomal recessive polycystic kidney disease (ARPKD), also called infantile polycystic disease, is a fairly rare genetic disorder. The gene that causes this disorder has been located on chromosome 6. Dilation of the renal collecting tubules causes renal failure, and in later forms of the disease, liver involvement is seen",
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 10,
    type: 'true-false',
    question: 'The Uretero pelvic Junction is also called the Pelvic Ureteral Junction',
    answer: 'True',
    explanation: "Not Found.",
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 11,
    type: 'multiple-choice',
    question: 'What often occurs with acquired cystic disease?',
    answer: 'Hemorrhage',
    score: 0,
    options: [
      {text: 'Hemorrhage', isCorrect: true},
      {text: 'Rupture', isCorrect: false},
      {text: 'Benign finding', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 12,
    type: 'multiple-choice',
    question: 'Name three causes for hematuria',
    answer: 'cancer, medication, uti',
    score: 0,
    options: [
      {text: 'cancer, medication, uti', isCorrect: true},
      {text: 'urinary, tract, infection', isCorrect: false},
      {text: 'diabetes, science, testing', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 13,
    type: 'true-false',
    question: 'Medullary Sponge Kidney consists of cystic dilation of the papillary ducts of bellini',
    answer: 'True',
    explanation: 'Medullary sponge kidney (MSK) is a development anomaly that occurs in the medullary pyramids and consists of cystic or fusiform dilation of the distal collecting ducts (ducts of Bellini), causing stasis of urine and stone formation',
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 14,
    type: 'true-false',
    question: 'Von Hippel-Lindau Disease is a rare benign disease that grows  tumors/cysts in the kidney and brain',
    answer: 'True',
    explanation: 'Tumors called hemangioblastomas are characteristic of von Hippel–Lindau syndrome. These growths are made of newly formed blood vessels. Although they are typically noncancerous, they can cause serious or life-threatening complications. People with von Hippel–Lindau syndrome commonly develop cysts in the kidneys, pancreas, and genital tract. They are also at an increased risk of developing a type of pancreatic cancer called a pancreatic neuroendocrine tumor',
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 15,
    type: 'multiple-choice',
    question: 'Angiomyolipoma contains:',
    answer: 'Fat, muscle and blood vessels',
    score: 0,
    options: [
      {text: 'Fat, muscle and blood vessels', isCorrect: true},
      {text: 'Fat, sinus and blood vessels', isCorrect: false},
      {text: 'Sinus, muscle and blood vessels', isCorrect: false},
      {text: 'Blood vessels, fat, arcuate arteries', isCorrect: false}
    ]
  },
  {
    number: 16,
    type: 'true-false',
    question: 'Lipomas consists of fat cells and muscles',
    answer: 'False',
    explanation: 'A lipoma consists of fat cells and is the most common of the mesenchymal type of tumors. This tumor is found more often in females than in males.',
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true},
    ]
  },
  {
    number: 17,
    type: 'fill-in',
    question: 'What is bilateral with tuberous sclerosis',
    answer: 'angiomyolipoma',
    score: 0,
    options: [
      {text: 'angiomyolipoma', isCorrect: true}
    ]
  },
  {
    number: 18,
    type: 'multiple-choice',
    question: 'What is the MOST common solid renal mass in adults?',
    answer: 'Renal Cell Carcinoma',
    score: 0,
    options: [
      {text: 'Renal Cell Carcinoma', isCorrect: true},
      {text: 'Lipoma', isCorrect: false},
      {text: 'Angiomyolipoma', isCorrect: false},
      {text: 'Atrophy of the Pyramids', isCorrect: false}
    ]
  },
  {
    number: 19,
    type: 'true-false',
    question: 'Renal artery stenosis is the MOST common cause of uncontrollable hypertensive nephropathy',
    answer: 'False',
    explanation: 'Renal artery stenosis (RAS) is the most common correctable cause of hypertension. Only 1% to 5% of hypertensive patients have a renovascular origin; most patients have essential hypertension.',
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 20,
    type: 'fill-in',
    question: 'What is the MOST common childhood malignant real tumor?',
    answer: 'wilms tumor',
    score: 0,
    options: [
      {text: 'wilms tumor', isCorrect: true}      
    ]
  },
  {
    number: 21,
    type: 'true-false',
    question: 'To diagnose Pyelonephritis you must only do an ultrasound',
    answer: 'False',
    explanation: "The specific gravity is the measurement of the kidney’s ability to concentrate urine, it is especially low in cases of renal failure, glomerular nephritis, and pyelonephritis Power Doppler may also be used in detecting and better defining pyelonephritis, with the area of infection showing an absence or decreased flow",
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 22,
    type:'multiple-choice',
    question: 'Emphysematous Pyelonephritis is a bacterial infection causing',
    answer: 'Reverberation',
    score: 0,
    options: [
      {text: 'ring down artifact', isCorrect: false},
      {text: 'Reverberation', isCorrect: true},
      {text: 'Enhancement', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 23,
    type: 'multiple-choice',
    question: 'Xanthogranulomatous Pyelonephritis is associated with',
    answer: 'Staghorn calculus',
    score: 0,
    options: [
      {text: 'Dromedary hump', isCorrect: false},
      {text: 'Staghorn calculus', isCorrect: true},
      {text: 'Renal Calculi', isCorrect: false},
      {text: 'Atrophied Arcuate arteries', isCorrect: false}
    ]
  },
  {
    number: 24,
    type: 'multiple-choice',
    question: 'Mycetoma means:',
    answer: 'Fungal ball',
    score: 0,
    options: [
      {text: 'Fungal ball', isCorrect: true},
      {text: 'Blood ball', isCorrect: false},
      {text: 'Bacteria ball', isCorrect: false},
      {text: 'Softball', isCorrect: false}
    ]
  },
  {
    number: 25,
    type: 'true-false',
    question: 'Nephrocalcinosis is a calcium disorder',
    answer: "True",
    explanation: 'Nephrocalcinosis, or parenchymal calcification, involves diffuse foci of calcium deposits, which usually are located in the medulla but infrequently can be seen in the renal cortex. Both kidneys are affected.',
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 26,
    type: 'multiple-choice',
    question: 'Nephrocalcinosis is NOT the same as:',
    answer: 'Nephrolithiasis',
    score: 0,
    options: [
      {text: 'Nephrolithiasis', isCorrect: true},
      {text: 'Cholelithiasis', isCorrect: false},
      {text: 'Urolithiasis', isCorrect: false},
      {text: 'All of the above', isCorrect: false}
    ]
  },
  {
    number: 27,
    type: 'fill-in',
    question: "Name the pathology that causes a 'twinkle' on color doppler",
    answer: 'kidney stone',
    score: 0,
    options: [
      {text: 'Kidney stone', isCorrect: true},
      {text: 'Nephrolithiasis', isCorrect: true}
    ]
  },
  {
    number: 28,
    type:'fill-in',
    question: 'Describe pathology for Urolithiasis?',
    answer: 'Stones in the ureter',
    score: 0,
    options: [
      {text: 'Stones in the ureter', isCorrect: true},
      {text: 'Stone within the urinary system', isCorrect: true}      
    ]
  },
  {
    number: 29,
    type: 'true-false',
    question: "The condition of mesenteric fat wrapped around the circumference of the intestine is called 'creeping fat'",
    answer: 'True',
    explanation: "Creeping fat refers to mesenteric fat that wraps around the colon wall. It is most commonly present in people with Crohn's disease.",
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 30,
    type: 'fill-in',
    question: 'Define hydronephrosis',
    answer: 'dilation of renal pelvis and calyces',
    score: 0,
    options: [
      {text: 'separation of renal sinus echoes by interconnected fluid-filled calyces', isCorrect: true},
      {text: 'dilation of the pelvocalyceal system', isCorrect: true},
      {text: 'dilation of renal sinus and calyces', isCorrect: true},
      {text: 'dilation of pelvic system', isCorrect: true},
      {text: 'dilation of renal pelvis and calyces', isCorrect: true}
    ]
  },
  {
    number: 31,
    type:'fill-in',
    question: 'What is the treatment for pyonephrosis?',
    answer: 'surgical drainage',
    score: 0,
    options: [
      {text: 'surgical drainage', isCorrect: true},
      {text: 'intravenous antibiotic', isCorrect: true},
      {text: 'intravenous antibiotic therapy', isCorrect: true},
      {text: 'percutaneous drainage', isCorrect: true}
    ]
  },
  {
    number: 32,
    type: 'fill-in',
    question: 'Can pyonephrosis be resolved on its own?',
    answer: 'No',
    score: 0,
    options: [
      {text: 'No', isCorrect: true},
      {text: 'Yes', isCorrect: false}
    ]
  },
  {
    number: 33,
    type: 'true-false',
    question: 'Papillary necrosis is ischemia of the medullary pyramids',
    answer: 'True',
    explanation: 'Renal papillary necrosis (RPN) is not a pathologic entity, but rather a descriptive term for a condition—necrosis of the papillae. The renal papillae (the apex of the renal pyramid that projects into the minor calyx) are vulnerable to ischemic necrosis. Ischemia is believed to have an important role in necrosis.',
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 34,
    type: 'multiple-choice',
    question: 'Describe what an Sonographer would see imaging renal sinus lipomatosis',
    answer: ['Increase in central sinus', 'Echogenic complex with cortical thinning'],
    score: 0,
    options: [
      {text: 'Increase in central sinus', isCorrect: false},
      {text: 'Echogenic complex with cortical thinning', isCorrect: false},
      {text: 'Parenchymal atrophy', isCorrect: false},
      {text: 'All of the above', isCorrect: true}
    ]
  },
  {
    number: 35,
    type: 'multiple-choice',
    question: 'Regulatory functions of the kidney are decreased in both',
    answer: 'Acute and chronic renal failure',
    score: 0,
    options: [
      {text: 'Glomerulus function and acute renal failure', isCorrect: false},
      {text: 'Acute and chronic renal failure', isCorrect: true},
      {text: 'Loop of Henle function and chronic renal failure', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 36,
    type: 'multiple-choice',
    question: 'Name 2 etiologic (cause) of chronic renal failure',
    answer:'parenchymal disease, nephropathies',
    score: 0,
    options: [
      {text: 'nephropathies, sinus lipomatosis', isCorrect: false},
      {text: 'parenchymal disease, nephropathies', isCorrect: true},
      {text:'parenchymal disease, sinus lipomatosis', isCorrect: false},
      {text:'None of the above', isCorrect: false}      
    ]
  },
  {
    number: 37,
    type: 'true-false',
    question: 'In acute renal failure (ARF) there is a reduction in glomerular filtration rate resulting in protoemia',
    answer: 'False',
    explanation: 'ARF may occur in prerenal, renal, or postrenal failure stages. The prerenal stage is secondary to hypoperfusion of the kidney. The renal stages may be caused by parenchymal diseases (i.e., acute glomerulonephritis, acute interstitial nephritis, or acute tubular necrosis). They may also be caused by renal vein thrombosis or renal artery occlusion',
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 38,
    type: 'fill-in',
    question: 'In intrinsic "intrarenal" failure, ..... is most common',
    answer:'acute tubular necrosis',
    score: 0,
    options: [
      {text: 'acute tubular necrosis', isCorrect: true}
    ]
  },
  {
    number: 39,
    type: 'multiple-choice',
    question: "What is Ultrasound's role in diagnosing the cause of acute renal failure?",
    answer:'hydronephrosis, abnormal resistance index',
    score: 0,
    options: [
      {text: 'hydronephrosis, abnormal resistance index', isCorrect: true},     
      {text: 'acute tubular necrosis, abnormal resistance index', isCorrect: false},     
      {text: 'hydronephrosis, acute tubular necrosis', isCorrect: false},     
      {text: 'None of the above', isCorrect: false},     
    ]
  },
  {
    number: 40,
    type: 'fill-in',
    question: 'High levels of Serum ... are the most accurate in diagnosing ARF',
    answer: 'creatine',
    score: 0,
    options: [
      {text: 'creatine', isCorrect: true}
    ]
  },
  {
    number: 41,
    type: 'fill-in',
    question: 'What RAR',
    answer: 'renal aortic ratio',
    score: 0,
    options: [
      {text: 'renal aortic ratio', isCorrect: true}
    ]
  },
  {
    number: 42,
    type: 'multiple-choice',
    question: 'RAR ration should be no more than',
    answer: '<3.5',
    score: 0,
    options: [
      {text: '<3.5', isCorrect: true},
      {text: '<2.5', isCorrect: false},
      {text: '<5.5', isCorrect: false},
      {text: '<6.5', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 43,
    type: 'multiple-choice',
    question: 'When taking the indirect measurement of the stenosis what arteries should be used for cooler Doppler and waveform?',
    answer: 'Segemental or interlobar',
    score: 0,
    options: [
      {text: 'Segemental or interlobar', isCorrect: true},
      {text: 'Segemental or interlobular', isCorrect: false},
      {text: 'Interlobar and arcuate', isCorrect: false},
      {text: 'Aorta and interlobar', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
      
    ]
  },
  {
    number: 44,
    type: 'multiple-choice',
    question: 'The resistive index for this measurement should be no more than',
    answer: 0.7,
    score: 0,
    options: [
      {text: '0.5', isCorrect: false},
      {text: '0.4', isCorrect: false},
      {text: '0.6', isCorrect: false},
      {text: '0.7', isCorrect: true},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 45,
    type: 'multiple-choice',
    question: 'Name the renal pathology that occurs when part of the tissue undergoes necrosis after te cessation of the blood supply',
    answer: 'None of the above',
    score: 0,
    options: [
      {text: 'Acute renal failure', isCorrect: false},
      {text: 'Chronic renal failure', isCorrect: false},
      {text: 'Renal cortex', isCorrect: false},
      {text: 'None of the above', isCorrect: true}
    ]
  },
  {
    number: 46,
    type: 'multiple-choice',
    question: 'Name the renal pathology that occurs when part of the tissue undergoes necrosis after te cessation of the blood supply',
    answer: 'Renal infraction',
    score: 0,
    options: [
      {text: 'Acute renal failure', isCorrect: false},
      {text: 'Chronic renal failure', isCorrect: false},
      {text: 'Renal cortex', isCorrect: false},
      {text: 'Renal infraction', isCorrect: true}
    ]
  },
  {
    number: 47,
    type: 'multiple-choice',
    question: 'Where is renal infraction located?',
    answer: 'Along the periphery of the renal border',
    score: 0,
    options: [
      {text: 'In the renal sinus', isCorrect: false},
      {text: 'Along the periphery of the renal border', isCorrect: true},
      {text: 'In the medullary pyramids', isCorrect: false},
      {text: 'In the loops of henle', isCorrect: false}
    ]
  },
  {
    number: 48,
    type: 'multiple-choice',
    question: 'What is the most common cause of renal vein thrombosis?',
    answer: 'Trauma',
    score: 0,
    options: [
      {text: 'Chronic Renal Disease', isCorrect: false},
      {text: 'Renal infarction', isCorrect: false},
      {text: 'Trauma', isCorrect: true},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 49,
    type: 'true-false',
    question: "In renal venous disorders, children are more likely affected than adults",
    answer: 'True',
    explanation: "Renal vein thrombosis is most likely to occur in the dehydrated or septic infant and is more prevalent in infants of diabetic mothers. It may also occur in infants with shock, glomerulonephritis, or nephrotic syndrome",
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 50,
    type: 'multiple-choice',
    question: "Name the pathology that causes a 'twinkle' on color doppler",
    answer: 'All of the above',
    score: 0,
    options: [
      {text: 'Kidney increases in size', isCorrect: false},
      {text: 'Echogenic', isCorrect: false},
      {text: 'Poor echo pyramids', isCorrect: false},
      {text: 'All of the above', isCorrect: true}
    ]
  },
  {
    number: 51,
    type: 'fill-in',
    question: "Wat is the course of treatment for end stage renal disease",
    answer: 'Renal transplant',
    score: 0,
    options: [
      {text: 'Renal transplant', isCorrect: true}
    ]
  },
  {
    number: 52,
    type: 'fill-in',
    question: "What is the most common artery does the renal artery anastomose too when doctors perform a renal artery transplant?",
    answer: 'External illiac artery',
    score: 0,
    options: [
      {text: 'External illiac artery', isCorrect: true}
    ]
  },
  {
    number: 53,
    type: 'multiple-choice',
    question: "Name two reasons why Ultrasound plays an important role in renal artery transplant",
    answer: 'To identify increased renovascular resistance. Ensuring arterial and venous circulations are normal',
    score: 0,
    options: [
      {text: 'To identify increased renovascular resistance. Ensuring arterial and venous circulations are normal.', isCorrect: true},
      {text: 'To prevent hydronephrosis. To track resistive index measurements.', isCorrect: false},
      {text: 'None of the above', isCorrect: false}
    ]
  },
  {
    number: 54,
    type: 'multiple-choice',
    question: "Renal allograft dysfunction most commonly occurs",
    answer: '1 year after tranplantation',
    score: 0,
    options: [
      {text: '2 years after tranplantation' , isCorrect: false},
      {text: '3 years after tranplantation' , isCorrect: false},
      {text: '6 months after tranplantation' , isCorrect: false},
      {text: '1 year after tranplantation' , isCorrect: true}
    ]
  },
  {
    number: 55,
    type: 'multiple-choice',
    question: "Normal bladder wall thickness is typically",
    answer: '5 mm',
    score: 0,
    options: [
      {text: '3 mm' , isCorrect: false},
      {text: '2 mm' , isCorrect: false},
      {text: '7 mm' , isCorrect: false},
      {text: '10 mm' , isCorrect: false},
      {text: '5 mm' , isCorrect: true}
    ]
  },
  {
    number: 56,
    type: 'multiple-choice',
    question: "the urinary bladder is located behind the",
    answer: 'Pubic bone',
    score: 0,
    options: [
      {text: 'Pubic bone' , isCorrect: true},
      {text: 'Pelvis bone' , isCorrect: false},
      {text: 'Psoas muscle' , isCorrect: false},
      {text: 'Uterus' , isCorrect: false}
    ]
  },
  {
    number: 57,
    type: 'multiple-choice',
    question: "The urinary apex is connected to the umbilicus by the",
    answer: 'Median umbilical ligament',
    score: 0,
    options: [
      {text: 'Posterior umbilical ligament' , isCorrect: false},
      {text: 'Median umbilical ligament' , isCorrect: true},
      {text: 'Ligament venosum' , isCorrect: false},
      {text: 'None of the above' , isCorrect: false}
    ]
  },
  {
    number: 58,
    type: 'multiple-choice',
    question: "Define bladder diverticula",
    answer: 'A herniation of the bladder wall. It is an outpouching of bladder mucosa between muscle bundles caused by increased intravesical pressure. These outpouchings may be singular or multiple and are thinner than the normal bladder wall.',
    score: 0,
    options: [
      {text: 'Encompasses a wide range of disease processes, which may be typical, complicated, or atypical. The disease may be acquired (nongenetic) or inherited (genetic) (e.g., von Hippel–Lindau disease, tuberous sclerosis' , isCorrect: false},
      {text: 'A herniation of the bladder wall. It is an outpouching of bladder mucosa between muscle bundles caused by increased intravesical pressure. These outpouchings may be singular or multiple and are thinner than the normal bladder wall.' , isCorrect: true},
      {text: 'Complications from partial nephrectomies, or trauma.' , isCorrect: false},
      {text: 'None of the above' , isCorrect: false}
    ]
  },
  {
    number: 59,
    type: 'true-false',
    question: "Urachal cyst is a dialtion of the fetal urachus",
    answer: 'True',
    explanation: "The urinary bladder is continuous with the allantois during embryonic development. The allantois regresses to become a fibrous cord known as the urachus. The urachus extends from the apex of the bladder to the umbilicus. If the lumen of the allantois persists while the urachus forms, an urachal fistula will develop resulting in urine draining from the bladder into the umbilicus. If only a small part of the lumen of the allantois persists, it is called a urachal cyst or vesicoallantoic cyst. If a larger portion of the lumen persists, it may cause a urachal sinus to develop",
    score: 0,
    options: [
      {text: 'True', isCorrect: true},
      {text: 'False', isCorrect: false}
    ]
  },
  {
    number: 60,
    type: 'multiple-choice',
    question: "In the developing fetus, the canal between the belly button and the bladder is known as the",
    answer: 'Urachus',
    score: 0,
    options: [
      {text: 'Ureters' , isCorrect: false},
      {text: 'Urachus' , isCorrect: true},
      {text: 'Umbilical canalfalse', isCorrect: false},
      {text: 'Laposcopic junction', isCorrect: false},
      {text: 'None of the above' , isCorrect: false}
    ]
  },
  {
    number: 61,
    type: 'fill-in',
    question: "Another name for Cystitis...",
    answer: 'Bladder inflammation',
    score: 0,
    options: [
      {text: 'Bladder inflammation', isCorrect: true}
    ]
  },
  {
    number: 62,
    type: 'multiple-choice',
    question: "What are some symptoms of bladder tumors",
    answer: 'Bladder mass 3to 4 mm and thick walls',
    score: 0,
    options: [
      {text: 'Thin walls, hypoechoic mass' , isCorrect: false},
      {text: 'Bladder mass 3 to 4 mm and thick walls', isCorrect: true},
      {text: 'Bladder mass 5 mm and thin walls', isCorrect: false},
      {text: 'None of the above' , isCorrect: false}
    ]
  },
  {
    number: 63,
    type: 'true-false',
    question: "All primary bladder tumors has smooth hypoechoic mass that projects into the lumen of the bladder",
    answer: 'False',
    explanation: "Benign tumors are typically hypoechoic compared with malignant bladder tumors, but they may have the same echogenicity. All primary bladder tumors—squamous cell carcinoma, adenocarcinoma, and rhabdomyosarcoma in children—have the same sonographic appearance: an irregular echogenic mass that projects into the lumen of the bladder",
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 64,
    type: 'multiple-choice',
    question: "What is the most common bladder neoplasm",
    answer: 'TCC: Transitional Cell Carcinoma',
    score: 0,
    options: [
      {text: 'TCC: Transitional Cell Carcinoma' , isCorrect: true},
      {text: 'RCC: Renal Cell Carcinoma' , isCorrect: false},
      {text: 'Kidney stone' , isCorrect: false},
      {text: 'Mets' , isCorrect: false}
    ]
  },
  {
    number: 65,
    type: 'true-false',
    question: "Can hydronephrosis be associate with TCC: Transitional Cell Carcinoma",
    answer: 'Yes',
    explanation: "Not Found.",
    score: 0,
    options: [
      {text: 'Yes', isCorrect: true},
      {text: 'No', isCorrect: false}
    ]
  },
  {
    number: 66,
    type: 'multiple-choice',
    question: "What is the most common clical representation of TCC: Transitional Cell Carcinoma",
    answer: 'Hematuria',
    score: 0,
    options: [
      {text: 'Hydronephrosis' , isCorrect: false},
      {text: 'Hematuria' , isCorrect: true},
      {text: 'Thin bladder walls' , isCorrect: false},
      {text: 'Increased BUN level' , isCorrect: false}
    ]
  },
  {
    number: 67,
    type: 'true-false',
    question: "Are ureteroceles an acquired pathology?",
    answer: 'No',
    explanation: " A ureterocele is a cystlike enlargement of the lower end of the ureter caused by congenital or acquired stenosis of the distal end of the ureter.",
    score: 0,
    options: [
      {text: 'Yes', isCorrect: false},
      {text: 'No', isCorrect: true}
    ]
  },
  {
    number: 68,
    type: 'true-false',
    question: "Ureteroceles a cystlike enlargement of the upper end of the ureter which projects into the bladder lumen and the upj",
    answer: 'False',
    explanation: " A ureterocele is a cystlike enlargement of the lower end of the ureter caused by congenital or acquired stenosis of the distal end of the ureter.",
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
  {
    number: 69,
    type: 'true-false',
    question: "Serum creatinine is directly related to glomerular filtration rate (GFR)",
    answer: 'False',
    explanation: "Not Found.",
    score: 0,
    options: [
      {text: 'True', isCorrect: false},
      {text: 'False', isCorrect: true}
    ]
  },
]

// Export for use in other file
export { title, questions };