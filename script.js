class ImmediateFeedbackQuiz {
    constructor() {
        this.currentQuestion = 0;
        this.userAnswers = [];
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.questionStates = []; // 'unanswered', 'correct', 'incorrect'
        this.showingDetailedReview = false;
        
        this.initializeElements();
        this.setupEventListeners();
        this.initializeQuestionStates();
        this.loadQuestion();
        this.updateProgress();
    }
    
    initializeElements() {
        this.questionCounter = document.getElementById('question-counter');
        this.questionText = document.getElementById('question-text');
        this.questionTypeHint = document.getElementById('question-type-hint');
        this.answerButtons = document.getElementById('answer-buttons');
        this.feedbackContainer = document.getElementById('feedback-container');
        this.feedbackResult = document.getElementById('feedback-result');
        this.feedbackExplanation = document.getElementById('feedback-explanation');
        
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.checkBtn = document.getElementById('check-btn');
        this.finishBtn = document.getElementById('finish-btn');
        
        this.correctCountEl = document.getElementById('correct-count');
        this.incorrectCountEl = document.getElementById('incorrect-count');
        this.progressBar = document.getElementById('progress-bar');
        this.progressText = document.getElementById('progress-text');
        
        this.quizContainer = document.getElementById('quiz-container');
        this.resultContainer = document.getElementById('result-container');
        this.detailedReview = document.getElementById('detailed-review');
        
        this.restartBtn = document.getElementById('restart-btn');
        this.reviewBtn = document.getElementById('review-btn');
    }
    
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.checkBtn.addEventListener('click', () => this.checkAnswer());
        this.finishBtn.addEventListener('click', () => this.finishQuiz());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.reviewBtn.addEventListener('click', () => this.toggleDetailedReview());
    }
    
    initializeQuestionStates() {
        this.questionStates = new Array(questions.length).fill('unanswered');
        this.userAnswers = new Array(questions.length).fill(null);
    }
    
    loadQuestion() {
        const question = questions[this.currentQuestion];
        
        this.questionCounter.textContent = `Câu ${this.currentQuestion + 1}`;
        this.questionText.textContent = question.question;
        
        // Hiển thị hint về loại câu hỏi
        if (question.type === 'multiple') {
            this.questionTypeHint.textContent = '💡 Câu hỏi nhiều đáp án - Có thể chọn nhiều phương án';
            this.questionTypeHint.style.display = 'block';
        } else {
            this.questionTypeHint.textContent = '💡 Câu hỏi một đáp án - Chỉ chọn một phương án';
            this.questionTypeHint.style.display = 'block';
        }
        
        this.renderAnswerButtons();
        this.updateNavigationButtons();
        this.updateProgress();
        
        // Hiển thị feedback nếu câu đã được trả lời
        if (this.questionStates[this.currentQuestion] !== 'unanswered') {
            this.showFeedback(this.questionStates[this.currentQuestion] === 'correct');
        } else {
            this.hideFeedback();
        }
    }
    
    renderAnswerButtons() {
        const question = questions[this.currentQuestion];
        const isAnswered = this.questionStates[this.currentQuestion] !== 'unanswered';
        
        this.answerButtons.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = option;
            button.dataset.index = index;
            
            // Khôi phục trạng thái đã chọn
            const userAnswer = this.userAnswers[this.currentQuestion];
            if (userAnswer !== null) {
                if (question.type === 'single' && userAnswer === index) {
                    button.classList.add('selected');
                } else if (question.type === 'multiple' && Array.isArray(userAnswer) && userAnswer.includes(index)) {
                    button.classList.add('selected');
                }
            }
            
            // Hiển thị kết quả nếu đã check
            if (isAnswered) {
                this.applyAnswerFeedback(button, index, question);
                button.style.pointerEvents = 'none';
            } else {
                button.addEventListener('click', () => this.selectAnswer(index));
            }
            
            this.answerButtons.appendChild(button);
        });
    }
    
    selectAnswer(selectedIndex) {
        const question = questions[this.currentQuestion];
        
        if (question.type === 'single') {
            // Single choice
            this.answerButtons.querySelectorAll('.answer-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            this.answerButtons.children[selectedIndex].classList.add('selected');
            this.userAnswers[this.currentQuestion] = selectedIndex;
        } else {
            // Multiple choice
            const button = this.answerButtons.children[selectedIndex];
            const isSelected = button.classList.contains('selected');
            
            if (!this.userAnswers[this.currentQuestion]) {
                this.userAnswers[this.currentQuestion] = [];
            }
            
            if (isSelected) {
                button.classList.remove('selected');
                const index = this.userAnswers[this.currentQuestion].indexOf(selectedIndex);
                this.userAnswers[this.currentQuestion].splice(index, 1);
            } else {
                button.classList.add('selected');
                this.userAnswers[this.currentQuestion].push(selectedIndex);
            }
        }
        
        this.updateNavigationButtons();
    }
    
    checkAnswer() {
        const question = questions[this.currentQuestion];
        const userAnswer = this.userAnswers[this.currentQuestion];
        const isCorrect = this.isAnswerCorrect(question, userAnswer);
        
        // Cập nhật trạng thái câu hỏi
        this.questionStates[this.currentQuestion] = isCorrect ? 'correct' : 'incorrect';
        
        // Cập nhật điểm
        if (isCorrect) {
            this.correctCount++;
        } else {
            this.incorrectCount++;
        }
        
        this.updateScoreDisplay();
        this.updateProgress();
        
        // Hiển thị feedback trên buttons
        this.answerButtons.querySelectorAll('.answer-btn').forEach((button, index) => {
            this.applyAnswerFeedback(button, index, question);
            button.style.pointerEvents = 'none';
        });
        
        // Hiển thị feedback text
        this.showFeedback(isCorrect);
        
        this.updateNavigationButtons();
    }
    
    applyAnswerFeedback(button, index, question) {
        const userAnswer = this.userAnswers[this.currentQuestion];
        const correctAnswer = question.correct;
        
        // Reset classes
        button.classList.remove('correct', 'incorrect', 'faded');
        
        // Xác định câu trả lời đúng
        const isCorrectOption = question.type === 'single' 
            ? index === correctAnswer 
            : correctAnswer.includes(index);
        
        // Xác định câu trả lời của user
        const isUserSelection = question.type === 'single'
            ? userAnswer === index
            : Array.isArray(userAnswer) && userAnswer.includes(index);
        
        if (isCorrectOption) {
            button.classList.add('correct');
        } else if (isUserSelection) {
            button.classList.add('incorrect');
        } else {
            button.classList.add('faded');
        }
    }
    
    isAnswerCorrect(question, userAnswer) {
        if (userAnswer === null || userAnswer === undefined) return false;
        
        if (question.type === 'single') {
            return userAnswer === question.correct;
        } else {
            if (!Array.isArray(userAnswer) || userAnswer.length === 0) return false;
            const sortedUser = [...userAnswer].sort();
            const sortedCorrect = [...question.correct].sort();
            return JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
        }
    }
    
    showFeedback(isCorrect) {
        const question = questions[this.currentQuestion];
        
        this.feedbackResult.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackResult.innerHTML = isCorrect 
            ? '✅ Chính xác!'
            : '❌ Chưa đúng!';
        
        this.feedbackExplanation.textContent = question.explanation || 'Không có giải thích.';
        this.feedbackContainer.style.display = 'block';
    }
    
    hideFeedback() {
        this.feedbackContainer.style.display = 'none';
    }
    
    updateNavigationButtons() {
        const hasAnswer = this.userAnswers[this.currentQuestion] !== null;
        const isAnswered = this.questionStates[this.currentQuestion] !== 'unanswered';
        
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = this.currentQuestion === questions.length - 1;
        
        // Hiển thị check button nếu có answer nhưng chưa check
        this.checkBtn.style.display = (hasAnswer && !isAnswered) ? 'block' : 'none';
        
        // Hiển thị finish button nếu ở câu cuối và đã check
        const isLastQuestion = this.currentQuestion === questions.length - 1;
        const allAnswered = this.questionStates.every(state => state !== 'unanswered');
        this.finishBtn.style.display = (isLastQuestion && allAnswered) ? 'block' : 'none';
    }
    
    updateScoreDisplay() {
        this.correctCountEl.textContent = this.correctCount;
        this.incorrectCountEl.textContent = this.incorrectCount;
    }
    
    updateProgress() {
        const answeredCount = this.questionStates.filter(state => state !== 'unanswered').length;
        const progress = (answeredCount / questions.length) * 100;
        
        this.progressBar.style.setProperty('--progress', `${progress}%`);
        this.progressText.textContent = `${answeredCount} / ${questions.length}`;
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.loadQuestion();
        }
    }
    
    nextQuestion() {
        if (this.currentQuestion < questions.length - 1) {
            this.currentQuestion++;
            this.loadQuestion();
        }
    }
    
    finishQuiz() {
        this.showResults();
    }
    
    showResults() {
        this.quizContainer.style.display = 'none';
        this.resultContainer.style.display = 'block';
        
        const percentage = Math.round((this.correctCount / questions.length) * 100);
        
        document.getElementById('final-score').textContent = `${percentage}%`;
        document.getElementById('final-correct').textContent = this.correctCount;
        document.getElementById('final-incorrect').textContent = this.incorrectCount;
        document.getElementById('final-percentage').textContent = `${percentage}%`;
        
        this.generateDetailedReview();
    }
    
    generateDetailedReview() {
        let reviewHTML = '';
        
        questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = this.questionStates[index] === 'correct';
            
            reviewHTML += `
                <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                    <h4>Câu ${index + 1}: ${isCorrect ? '✅' : '❌'}</h4>
                    <p><strong>Câu hỏi:</strong> ${question.question}</p>
                    <p><strong>Đáp án của bạn:</strong> ${this.formatUserAnswer(question, userAnswer)}</p>
                    <p><strong>Đáp án đúng:</strong> ${this.formatCorrectAnswer(question)}</p>
                    <p><strong>Giải thích:</strong> ${question.explanation || 'Không có giải thích.'}</p>
                </div>
            `;
        });
        
        this.detailedReview.innerHTML = reviewHTML;
        this.detailedReview.style.display = 'none'; // Ẩn mặc định
    }
    
    formatUserAnswer(question, userAnswer) {
        if (userAnswer === null || userAnswer === undefined) return 'Không trả lời';
        
        if (question.type === 'single') {
            return question.options[userAnswer] || 'Không trả lời';
        } else {
            if (!Array.isArray(userAnswer) || userAnswer.length === 0) return 'Không trả lời';
            return userAnswer.map(index => question.options[index]).join(', ');
        }
    }
    
    formatCorrectAnswer(question) {
        if (question.type === 'single') {
            return question.options[question.correct];
        } else {
            return question.correct.map(index => question.options[index]).join(', ');
        }
    }
    
    toggleDetailedReview() {
        if (this.showingDetailedReview) {
            this.detailedReview.style.display = 'none';
            this.reviewBtn.textContent = '📝 Xem chi tiết';
            this.showingDetailedReview = false;
        } else {
            this.detailedReview.style.display = 'block';
            this.reviewBtn.textContent = '🔼 Ẩn chi tiết';
            this.showingDetailedReview = true;
        }
    }
    
    restartQuiz() {
        this.currentQuestion = 0;
        this.correctCount = 0;
        this.incorrectCount = 0;
        this.showingDetailedReview = false;
        
        this.initializeQuestionStates();
        
        this.resultContainer.style.display = 'none';
        this.quizContainer.style.display = 'block';
        
        this.updateScoreDisplay();
        this.loadQuestion();
    }
}

// Khởi tạo quiz khi page load
document.addEventListener('DOMContentLoaded', () => {
    new ImmediateFeedbackQuiz();
});
