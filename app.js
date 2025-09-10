// Application Data
const appData = {
  "accurateTimers": {
    "Russell's Viper": {
      "critical_hours": 2,
      "warning_hours": 1,
      "message": "Bleeding complications develop rapidly - MOST URGENT",
      "urgency": "EXTREME",
      "color": "#FF0000"
    },
    "Saw-scaled Viper": {
      "critical_hours": 3,
      "warning_hours": 2,
      "message": "Severe bleeding and tissue damage",
      "urgency": "HIGH",
      "color": "#FF4444"
    },
    "Indian Cobra": {
      "critical_hours": 4,
      "warning_hours": 2,
      "message": "Neurotoxic paralysis progression",
      "urgency": "HIGH",
      "color": "#FF6666"
    },
    "Common Krait": {
      "critical_hours": 6,
      "warning_hours": 4,
      "message": "Neurotoxic symptoms develop within 6 hours",
      "urgency": "HIGH",
      "color": "#FF8888"
    },
    "Indian Python": {
      "critical_hours": 0,
      "warning_hours": 0,
      "message": "Non-venomous - Monitor for infection",
      "urgency": "LOW",
      "color": "#00AA00"
    },
    "Indian Rat Snake": {
      "critical_hours": 0,
      "warning_hours": 0,
      "message": "Non-venomous - Basic wound care needed",
      "urgency": "LOW",
      "color": "#00AA00"
    }
  },
  "snakeDatabase": [
    {
      "name": "Russell's Viper",
      "scientificName": "Daboia russelii",
      "riskLevel": "EXTREMELY HIGH",
      "identifyingFeatures": [
        "Brown/tan with three rows of dark oval spots",
        "Triangular head, distinct from neck",
        "Keeled (rough) scales",
        "Heat-sensing pits near nostrils",
        "Very loud hissing when threatened",
        "Length: 120-166 cm"
      ],
      "immediateActions": [
        "CALL 108 IMMEDIATELY - MOST URGENT",
        "Control bleeding at bite site",
        "Apply firm pressure bandage",
        "Keep victim lying flat",
        "Watch for shock symptoms",
        "FAST transport to hospital - TIME CRITICAL"
      ],
      "symptoms": {
        "0-30min": ["Severe pain at bite site", "Rapid swelling", "Bleeding from wound"],
        "30min-2h": ["Nausea and vomiting", "Bleeding from gums", "Blood in urine"],
        "2-6hours": ["Severe internal bleeding", "Blood pressure drop", "Kidney problems"],
        "6hours+": ["Organ failure", "Life-threatening bleeding", "CRITICAL CONDITION"]
      }
    },
    {
      "name": "Common Krait",
      "scientificName": "Bungarus caeruleus",
      "riskLevel": "EXTREMELY HIGH",
      "identifyingFeatures": [
        "Black/dark blue with thin white bands",
        "Small head relative to body",
        "Smooth, glossy scales",
        "Triangular body cross-section",
        "Nocturnal (active at night)",
        "Length: 90-180 cm"
      ],
      "immediateActions": [
        "CALL 108 IMMEDIATELY",
        "Keep victim absolutely still",
        "Apply broad pressure bandage over entire limb",
        "Immobilize with splint",
        "Monitor breathing - be ready for CPR",
        "DO NOT wash bite site"
      ],
      "symptoms": {
        "0-2hours": ["Often painless bite", "No local swelling", "Victim may feel normal"],
        "2-6hours": ["Drowsiness", "Difficulty speaking", "Drooping eyelids"],
        "6-12hours": ["Muscle weakness", "Difficulty swallowing", "Breathing problems"],
        "12hours+": ["Complete paralysis", "Respiratory failure", "CRITICAL CONDITION"]
      }
    },
    {
      "name": "Indian Cobra",
      "scientificName": "Naja naja",
      "riskLevel": "EXTREMELY HIGH",
      "identifyingFeatures": [
        "Hood with spectacle marking when threatened",
        "Brown, black, or yellowish coloration",
        "Round pupils",
        "Smooth scales",
        "Distinctive hood spreading behavior",
        "Length: 120-175 cm"
      ],
      "immediateActions": [
        "CALL 108 IMMEDIATELY",
        "Apply broad pressure bandage over bite",
        "Immobilize bitten limb completely",
        "Keep victim calm and still",
        "Monitor for breathing difficulty",
        "Prepare for potential CPR"
      ],
      "symptoms": {
        "0-1hour": ["Local pain and swelling", "Nausea", "Drowsiness"],
        "1-4hours": ["Muscle weakness", "Difficulty speaking", "Drooping eyelids"],
        "4-8hours": ["Paralysis spreading", "Breathing difficulty", "Heart rate changes"],
        "8hours+": ["Respiratory failure", "Complete paralysis", "CRITICAL CONDITION"]
      }
    },
    {
      "name": "Indian Python",
      "scientificName": "Python molurus",
      "riskLevel": "LOW - NON-VENOMOUS",
      "immediateActions": [
        "Clean wound with soap and water",
        "Apply antiseptic to prevent infection",
        "Apply clean bandage",
        "Monitor for signs of infection",
        "Seek medical care for tetanus shot",
        "No emergency antivenom needed"
      ]
    }
  ],
  "hospitals": [
    {
      "name": "All India Institute of Medical Sciences (AIIMS)",
      "location": "New Delhi",
      "phone": "011-26588500",
      "emergency": "011-26588663",
      "antivenom": "Polyvalent ASV - Full stock available 24/7",
      "availability": "24/7"
    },
    {
      "name": "Lok Nayak Jai Prakash Hospital (LNJP)",
      "location": "Delhi",
      "phone": "011-23234242",
      "emergency": "108",
      "antivenom": "90+ vials polyvalent ASV in stock",
      "availability": "24/7"
    }
  ],
  "questions": [
    {
      "id": "size",
      "question": "What was the approximate length of the snake?",
      "options": [
        {"value": "small", "label": "Small (under 60cm/2 feet)", "suggests": ["Saw-scaled Viper"]},
        {"value": "medium", "label": "Medium (60cm-2m/2-6 feet)", "suggests": ["Indian Cobra", "Common Krait", "Russell's Viper"]},
        {"value": "large", "label": "Large (over 2m/6+ feet)", "suggests": ["Indian Python"]}
      ]
    },
    {
      "id": "head_shape",
      "question": "What was the shape of the head?",
      "options": [
        {"value": "triangular", "label": "Triangular, distinct from neck", "suggests": ["Russell's Viper", "Saw-scaled Viper"]},
        {"value": "round", "label": "Round, not distinct from body", "suggests": ["Indian Cobra", "Common Krait", "Indian Python"]},
        {"value": "hooded", "label": "Spread hood when threatened", "suggests": ["Indian Cobra"]}
      ]
    },
    {
      "id": "colors",
      "question": "What were the main colors and patterns?",
      "options": [
        {"value": "black_bands", "label": "Black/dark blue with white bands", "suggests": ["Common Krait"]},
        {"value": "brown_spots", "label": "Brown with dark oval spots", "suggests": ["Russell's Viper"]},
        {"value": "uniform", "label": "Uniform brown/yellow/black", "suggests": ["Indian Cobra", "Indian Python"]}
      ]
    }
  ]
};

// Application State
let currentScreen = 'homeScreen';
let cameraStream = null;
let currentImageData = null;
let questionnaireAnswers = {};
let currentQuestionIndex = 0;
let treatmentTimer = null;
let activityHistory = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('🐍 Serpent AI Initializing...');
    setupEventListeners();
    showScreen('homeScreen');
    
    // Logo pulse animation
    setTimeout(() => {
        const logoBtn = document.getElementById('logoBtn');
        if (logoBtn) {
            logoBtn.style.animation = 'logoPulse 2s infinite';
        }
    }, 1000);
});

function setupEventListeners() {
    console.log('⚡ Setting up event listeners...');
    
    // Navigation items - Fixed event delegation
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const screen = this.getAttribute('data-screen');
            console.log('📱 Navigation clicked:', screen);
            if (screen) {
                showScreen(screen);
                updateNavigation(this);
            }
        });
    });

    // Logo button - return to home
    const logoBtn = document.getElementById('logoBtn');
    if (logoBtn) {
        logoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🏠 Logo clicked - returning home');
            this.style.animation = 'bounce 0.5s ease';
            setTimeout(() => {
                this.style.animation = 'logoPulse 2s infinite';
            }, 500);
            showScreen('homeScreen');
            updateNavigation(document.querySelector('[data-screen="homeScreen"]'));
        });
    }

    // Profile/Login button
    const profileBtn = document.getElementById('profileBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('👤 Profile/Login clicked');
            this.style.animation = 'bounce 0.3s ease';
            setTimeout(() => {
                this.style.animation = '';
            }, 300);
            alert('🔐 Login System\n\nConnect your account for:\n• Personalized snake identification history\n• Faster emergency response\n• Treatment reminders\n• Location-based hospital finder');
        });
    }

    // Camera button - Fixed
    const cameraBtn = document.getElementById('cameraBtn');
    if (cameraBtn) {
        cameraBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('📷 Camera button clicked');
            openCamera();
        });
    }

    // File upload button - Fixed
    const fileBtn = document.getElementById('fileBtn');
    const fileInput = document.getElementById('fileInput');
    if (fileBtn && fileInput) {
        fileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('📁 File button clicked');
            fileInput.click();
        });
        
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                console.log('📄 File selected:', file.name);
                handleFile(file);
            }
        });
    }

    // Identify by presence button - Fixed
    const identifyBtn = document.getElementById('identifyBtn');
    if (identifyBtn) {
        identifyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('❓ Identify by presence clicked');
            showScreen('questionnaireScreen');
        });
    }

    // Camera controls
    setupCameraControls();
    
    // Preview controls
    setupPreviewControls();
    
    // Questionnaire controls
    setupQuestionnaireControls();
    
    // Location controls
    const locationBtn = document.getElementById('getCurrentLocation');
    if (locationBtn) {
        locationBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            getCurrentLocation();
        });
    }

    // Emergency call button
    const emergencyCall = document.querySelector('.emergency-call');
    if (emergencyCall) {
        emergencyCall.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🚨 Emergency call clicked');
            window.open('tel:108', '_blank');
        });
    }

    console.log('✅ Event listeners setup complete');
}

function setupCameraControls() {
    const closeCameraBtn = document.getElementById('closeCameraBtn');
    const captureBtn = document.getElementById('captureBtn');
    
    if (closeCameraBtn) {
        closeCameraBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeCamera();
        });
    }
    
    if (captureBtn) {
        captureBtn.addEventListener('click', function(e) {
            e.preventDefault();
            captureImage();
        });
    }
}

function setupPreviewControls() {
    const retakeBtn = document.getElementById('retakeBtn');
    const analyzeBtn = document.getElementById('analyzeBtn');
    
    if (retakeBtn) {
        retakeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            retakeImage();
        });
    }
    
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            analyzeImage();
        });
    }
}

function setupQuestionnaireControls() {
    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const finishBtn = document.getElementById('finishQuestionBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function(e) {
            e.preventDefault();
            previousQuestion();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function(e) {
            e.preventDefault();
            nextQuestion();
        });
    }
    
    if (finishBtn) {
        finishBtn.addEventListener('click', function(e) {
            e.preventDefault();
            finishQuestionnaire();
        });
    }
}

// Screen Management - Fixed
function showScreen(screenId) {
    console.log('🖥️ Showing screen:', screenId);
    
    // Hide all screens
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentScreen = screenId;

        // Initialize screen-specific content
        if (screenId === 'questionnaireScreen') {
            initializeQuestionnaire();
        } else if (screenId === 'activityScreen') {
            updateActivityScreen();
        } else if (screenId === 'locationScreen') {
            updateLocationScreen();
        }
        
        console.log('✅ Screen switched to:', screenId);
    } else {
        console.error('❌ Screen not found:', screenId);
    }
}

function updateNavigation(activeItem) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

// Camera Functionality
async function openCamera() {
    console.log('📷 Opening camera...');
    
    // Check if we can access camera
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('📷 Camera not available\n\nYour browser doesn\'t support camera access. Please use the "Select to Upload" option instead.');
        return;
    }
    
    try {
        const constraints = {
            video: { 
                facingMode: 'environment',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            }
        };
        
        cameraStream = await navigator.mediaDevices.getUserMedia(constraints);
        
        const video = document.getElementById('cameraVideo');
        if (video) {
            video.srcObject = cameraStream;
            showScreen('cameraScreen');
            console.log('✅ Camera opened successfully');
        }
    } catch (error) {
        console.error('❌ Camera error:', error);
        alert('📷 Camera Access Denied\n\nPlease:\n1. Allow camera permissions\n2. Or use "Select to Upload" instead\n3. Ensure camera is not being used by another app');
    }
}

function closeCamera() {
    console.log('📷 Closing camera...');
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    showScreen('homeScreen');
    updateNavigation(document.querySelector('[data-screen="homeScreen"]'));
}

function captureImage() {
    console.log('📸 Capturing image...');
    const video = document.getElementById('cameraVideo');
    const canvas = document.getElementById('captureCanvas');
    
    if (!video || !canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    ctx.drawImage(video, 0, 0);
    
    currentImageData = canvas.toDataURL('image/jpeg', 0.8);
    
    // Close camera
    closeCamera();
    
    // Show preview
    showImagePreview();
}

function retakeImage() {
    currentImageData = null;
    openCamera();
}

// File Upload - Fixed
function handleFile(file) {
    if (!file) {
        console.log('❌ No file selected');
        return;
    }
    
    if (!file.type.startsWith('image/')) {
        alert('📄 Invalid File Type\n\nPlease select an image file (JPG, PNG, etc.)');
        return;
    }

    console.log('📄 Processing file:', file.name);
    const reader = new FileReader();
    
    reader.onload = (e) => {
        currentImageData = e.target.result;
        showImagePreview();
        console.log('✅ File loaded successfully');
    };
    
    reader.onerror = () => {
        console.error('❌ File reading failed');
        alert('❌ Failed to read file. Please try again.');
    };
    
    reader.readAsDataURL(file);
}

function showImagePreview() {
    const previewImage = document.getElementById('previewImage');
    if (previewImage && currentImageData) {
        previewImage.src = currentImageData;
        showScreen('previewScreen');
        console.log('✅ Image preview displayed');
    }
}

// Image Analysis
function analyzeImage() {
    console.log('🔍 Analyzing image...');
    if (!currentImageData) return;
    
    showLoading();
    
    // Simulate AI analysis
    setTimeout(() => {
        hideLoading();
        
        const hasSnake = Math.random() > 0.2; // 80% chance of detecting snake
        
        if (hasSnake) {
            const species = appData.snakeDatabase[Math.floor(Math.random() * appData.snakeDatabase.length)];
            const confidence = Math.floor(Math.random() * 30) + 70;
            
            displayResults({
                hasSnake: true,
                species: species.name,
                confidence: confidence,
                snakeData: species
            });
            
            addToHistory({
                type: 'image_analysis',
                timestamp: new Date(),
                snake: species.name,
                confidence: confidence
            });
        } else {
            displayNoSnakeError();
        }
    }, 3000);
}

function displayNoSnakeError() {
    const resultsContainer = document.querySelector('.results-container');
    if (resultsContainer) {
        resultsContainer.innerHTML = `
            <div class="result-card priority-card" style="text-align: center;">
                <h2>❌ No Snake Detected</h2>
                <p style="font-size: 18px; margin: 20px 0;">There is no snake in this picture.</p>
                <p>Please ensure:</p>
                <ul style="text-align: left; margin: 20px 0;">
                    <li>The entire snake is visible</li>
                    <li>The image is clear and well-lit</li>
                    <li>The snake is the main subject</li>
                </ul>
                <button class="btn btn--primary" onclick="retakeImage()">Take Another Photo</button>
                <button class="btn btn--secondary" onclick="showScreen('homeScreen')" style="margin-left: 10px;">Back to Home</button>
            </div>
        `;
        showScreen('resultsScreen');
    }
}

function displayResults(analysisResult) {
    console.log('📊 Displaying results:', analysisResult);
    const snakeData = analysisResult.snakeData;
    
    updateImmediateActions(snakeData);
    startTreatmentTimer(snakeData);
    updateHospitalsList();
    updateSnakeDetails(snakeData, analysisResult.confidence);
    updateSymptomsTimeline(snakeData);
    
    showScreen('resultsScreen');
}

function updateImmediateActions(snakeData) {
    const actionsDiv = document.getElementById('immediateActions');
    if (actionsDiv && snakeData.immediateActions) {
        const actionsList = snakeData.immediateActions.map(action => 
            `<div style="margin: 8px 0; padding: 12px; background: rgba(255,255,255,0.2); border-radius: 8px; border-left: 4px solid #fff;">⚡ ${action}</div>`
        ).join('');
        actionsDiv.innerHTML = actionsList;
    }
}

function startTreatmentTimer(snakeData) {
    const timerCard = document.getElementById('timerCard');
    if (!timerCard) return;
    
    const timerData = appData.accurateTimers[snakeData.name];
    
    if (timerData && timerData.critical_hours > 0) {
        timerCard.style.display = 'block';
        timerCard.style.background = `linear-gradient(135deg, ${timerData.color}, ${timerData.color}AA)`;
        
        let remainingSeconds = timerData.critical_hours * 3600;
        
        if (treatmentTimer) clearInterval(treatmentTimer);
        
        treatmentTimer = setInterval(() => {
            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;
            
            const timerHours = document.getElementById('timerHours');
            const timerMinutes = document.getElementById('timerMinutes');
            const timerSecs = document.getElementById('timerSeconds');
            
            if (timerHours) timerHours.textContent = hours.toString().padStart(2, '0');
            if (timerMinutes) timerMinutes.textContent = minutes.toString().padStart(2, '0');
            if (timerSecs) timerSecs.textContent = seconds.toString().padStart(2, '0');
            
            remainingSeconds--;
            
            if (remainingSeconds < 0) {
                clearInterval(treatmentTimer);
                const timerMessage = document.getElementById('timerMessage');
                if (timerMessage) {
                    timerMessage.textContent = "⚠️ CRITICAL TIME EXCEEDED - SEEK IMMEDIATE HELP!";
                    timerMessage.style.animation = 'pulse 1s infinite';
                }
            }
        }, 1000);
        
        const timerMessage = document.getElementById('timerMessage');
        if (timerMessage) {
            timerMessage.textContent = timerData.message;
        }
    } else {
        timerCard.style.display = 'none';
    }
}

function updateHospitalsList() {
    const hospitalsList = document.getElementById('hospitalsList');
    if (!hospitalsList) return;
    
    const hospitalsHTML = appData.hospitals.map(hospital => `
        <div class="hospital-card">
            <div class="hospital-name">${hospital.name}</div>
            <div class="hospital-info">📍 ${hospital.location}</div>
            <div class="hospital-info">💉 ${hospital.antivenom}</div>
            <div class="hospital-info">⏰ ${hospital.availability}</div>
            <div class="hospital-info">
                📞 <a href="tel:${hospital.phone}" class="hospital-phone" target="_blank">${hospital.phone}</a>
            </div>
            ${hospital.emergency ? `<div class="hospital-info">🚨 Emergency: <a href="tel:${hospital.emergency}" target="_blank">${hospital.emergency}</a></div>` : ''}
        </div>
    `).join('');
    
    hospitalsList.innerHTML = hospitalsHTML;
}

function updateSnakeDetails(snakeData, confidence) {
    const detailsDiv = document.getElementById('snakeDetails');
    if (!detailsDiv) return;
    
    const featuresHTML = snakeData.identifyingFeatures ? 
        snakeData.identifyingFeatures.map(feature => `<li>${feature}</li>`).join('') : '';
    
    detailsDiv.innerHTML = `
        <div class="snake-info">
            <div class="snake-name">${snakeData.name}</div>
            <div style="margin-bottom: 16px;">
                <em>${snakeData.scientificName || ''}</em>
                <span class="confidence-score" style="margin-left: 10px;">Confidence: ${confidence}%</span>
            </div>
            <div style="margin-bottom: 16px;">
                <strong>Risk Level:</strong> 
                <span style="color: ${snakeData.riskLevel.includes('EXTREMELY') ? '#ff0000' : '#00aa00'}; font-weight: bold;">${snakeData.riskLevel}</span>
            </div>
            ${featuresHTML ? `
                <div>
                    <strong>Identifying Features:</strong>
                    <ul class="snake-features">${featuresHTML}</ul>
                </div>
            ` : ''}
        </div>
    `;
}

function updateSymptomsTimeline(snakeData) {
    const timelineDiv = document.getElementById('symptomsTimeline');
    if (!timelineDiv) return;
    
    if (!snakeData.symptoms) {
        timelineDiv.innerHTML = '<p>No specific symptoms timeline available for this species.</p>';
        return;
    }
    
    const symptomsHTML = Object.entries(snakeData.symptoms).map(([timeFrame, symptoms]) => `
        <div class="symptom-period">
            <div class="symptom-time">${timeFrame}</div>
            <ul class="symptom-list">
                ${symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
            </ul>
        </div>
    `).join('');
    
    timelineDiv.innerHTML = symptomsHTML;
}

// Questionnaire Functionality - Fixed
function initializeQuestionnaire() {
    console.log('❓ Initializing questionnaire...');
    currentQuestionIndex = 0;
    questionnaireAnswers = {};
    displayQuestion();
}

function displayQuestion() {
    const questions = appData.questions;
    const currentQuestion = questions[currentQuestionIndex];
    
    const questionTitle = document.getElementById('questionTitle');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const progressFill = document.getElementById('progressFill');
    
    if (questionTitle) {
        questionTitle.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    }
    if (questionText) {
        questionText.textContent = currentQuestion.question;
    }
    
    if (optionsContainer) {
        optionsContainer.innerHTML = currentQuestion.options.map(option => `
            <button class="option-btn" data-value="${option.value}">
                ${option.label}
            </button>
        `).join('');
        
        // Add click handlers to options
        optionsContainer.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                selectOption(this.dataset.value);
            });
        });
    }
    
    // Update progress
    if (progressFill) {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressFill.style.width = progress + '%';
    }
    
    updateQuestionButtons();
}

function selectOption(value) {
    console.log('✅ Option selected:', value);
    
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    document.querySelector(`[data-value="${value}"]`).classList.add('selected');
    
    const currentQuestion = appData.questions[currentQuestionIndex];
    questionnaireAnswers[currentQuestion.id] = value;
    
    updateQuestionButtons();
}

function updateQuestionButtons() {
    const prevBtn = document.getElementById('prevQuestionBtn');
    const nextBtn = document.getElementById('nextQuestionBtn');
    const finishBtn = document.getElementById('finishQuestionBtn');
    
    if (prevBtn) {
        prevBtn.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    }
    
    const hasAnswer = appData.questions[currentQuestionIndex] && 
                     questionnaireAnswers[appData.questions[currentQuestionIndex].id];
    
    if (currentQuestionIndex < appData.questions.length - 1) {
        if (nextBtn) nextBtn.style.display = hasAnswer ? 'block' : 'none';
        if (finishBtn) finishBtn.style.display = 'none';
    } else {
        if (nextBtn) nextBtn.style.display = 'none';
        if (finishBtn) finishBtn.style.display = hasAnswer ? 'block' : 'none';
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < appData.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function finishQuestionnaire() {
    console.log('✅ Finishing questionnaire...');
    const suggestions = analyzeQuestionnaireAnswers();
    displayQuestionnaireResults(suggestions);
}

function analyzeQuestionnaireAnswers() {
    const speciesScores = {};
    
    appData.snakeDatabase.forEach(snake => {
        speciesScores[snake.name] = 0;
    });
    
    Object.entries(questionnaireAnswers).forEach(([questionId, answer]) => {
        const question = appData.questions.find(q => q.id === questionId);
        const option = question.options.find(o => o.value === answer);
        
        if (option && option.suggests) {
            option.suggests.forEach(speciesName => {
                if (speciesScores[speciesName] !== undefined) {
                    speciesScores[speciesName]++;
                }
            });
        }
    });
    
    const sorted = Object.entries(speciesScores)
        .sort(([,a], [,b]) => b - a)
        .filter(([,score]) => score > 0)
        .slice(0, 3);
    
    return sorted.map(([name, score]) => ({
        name,
        score,
        confidence: Math.min(95, (score / appData.questions.length) * 100)
    }));
}

function displayQuestionnaireResults(suggestions) {
    if (suggestions.length === 0) {
        const resultsContainer = document.querySelector('.results-container');
        if (resultsContainer) {
            resultsContainer.innerHTML = `
                <div class="result-card">
                    <h2>❓ Unable to Determine Species</h2>
                    <p>Based on your answers, we cannot determine the snake species with confidence.</p>
                    <button class="btn btn--primary" onclick="showScreen('homeScreen')">Try Photo Upload</button>
                </div>
            `;
            showScreen('resultsScreen');
        }
    } else {
        const topSuggestion = suggestions[0];
        const snakeData = appData.snakeDatabase.find(s => s.name === topSuggestion.name);
        
        if (snakeData) {
            displayResults({
                hasSnake: true,
                species: topSuggestion.name,
                confidence: Math.round(topSuggestion.confidence),
                snakeData: snakeData
            });
            
            addToHistory({
                type: 'questionnaire',
                timestamp: new Date(),
                suggestions: suggestions
            });
        }
    }
}

// Location Management - Fixed
function getCurrentLocation() {
    console.log('📍 Getting location...');
    
    if (!navigator.geolocation) {
        alert('📍 Geolocation Not Supported\n\nYour browser doesn\'t support location services.');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log('✅ Location obtained:', position.coords);
            updateLocationScreen();
            alert('📍 Location Updated!\n\nShowing nearest hospitals with anti-snake venom based on your current location.');
        },
        error => {
            console.error('❌ Location error:', error);
            let message = '📍 Location Access Error\n\n';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    message += 'Location access denied. Please enable location services.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    message += 'Location information unavailable.';
                    break;
                case error.TIMEOUT:
                    message += 'Location request timed out.';
                    break;
                default:
                    message += 'An unknown error occurred.';
                    break;
            }
            alert(message);
            updateLocationScreen(); // Show hospitals anyway
        }
    );
}

function updateLocationScreen() {
    const hospitalsMap = document.getElementById('hospitalsMap');
    if (hospitalsMap) {
        hospitalsMap.innerHTML = `
            <div style="padding: 20px; text-align: center;">
                <p>📍 Nearest hospitals with anti-snake venom:</p>
                <div style="text-align: left; margin-top: 20px;">
                    ${appData.hospitals.map(hospital => `
                        <div class="hospital-card" style="margin-bottom: 16px;">
                            <div class="hospital-name">${hospital.name}</div>
                            <div class="hospital-info">📍 ${hospital.location}</div>
                            <div class="hospital-info">💉 ${hospital.antivenom}</div>
                            <div class="hospital-info">📞 <a href="tel:${hospital.phone}" target="_blank">${hospital.phone}</a></div>
                            <div class="hospital-info">⏰ Available: ${hospital.availability}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}

function updateActivityScreen() {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;
    
    if (activityHistory.length === 0) {
        activityList.innerHTML = `
            <div style="text-align: center; padding: 40px; color: rgba(255,255,255,0.7);">
                <div style="font-size: 48px; margin-bottom: 16px;">📋</div>
                <p>No previous identifications yet.</p>
                <p style="font-size: 14px;">Upload a snake photo or use questionnaire to get started!</p>
            </div>
        `;
        return;
    }
    
    const activitiesHTML = activityHistory.slice().reverse().map((activity, index) => `
        <div class="card" style="margin-bottom: 16px; animation: fadeInUp 0.3s ease-out ${index * 0.1}s both;">
            <div class="card__body">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <strong>${activity.type === 'image_analysis' ? '📷 Image Analysis' : '📝 Questionnaire'}</strong>
                    <small>${new Date(activity.timestamp).toLocaleDateString()}</small>
                </div>
                ${activity.snake ? `<div>Species: <strong style="color: var(--color-primary);">${activity.snake}</strong></div>` : ''}
                ${activity.confidence ? `<div>Confidence: <span style="color: var(--color-success);">${activity.confidence}%</span></div>` : ''}
            </div>
        </div>
    `).join('');
    
    activityList.innerHTML = activitiesHTML;
}

function addToHistory(activity) {
    activityHistory.push(activity);
    if (activityHistory.length > 50) {
        activityHistory = activityHistory.slice(-50);
    }
    console.log('📝 Added to history:', activity);
}

// Utility Functions
function showLoading() {
    const loadingModal = document.getElementById('loadingModal');
    if (loadingModal) {
        loadingModal.classList.remove('hidden');
        console.log('⏳ Loading modal shown');
    }
}

function hideLoading() {
    const loadingModal = document.getElementById('loadingModal');
    if (loadingModal) {
        loadingModal.classList.add('hidden');
        console.log('✅ Loading modal hidden');
    }
}

// Global functions for HTML onclick handlers
window.retakeImage = retakeImage;
window.showScreen = showScreen;

console.log('🐍 Serpent AI JavaScript loaded successfully!');