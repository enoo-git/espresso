const questions = [
    {
        question: "When did Espresso Systems announce its exit from stealth mode?<br/><br/>A) 2020 <br/> B) 2022 <br/> C) 2024",
        correctAnswers: ["b", "2022"]
    },
    {
        question: "How much did Espresso Systems raise in its initial funding round in 2022?<br/><br/>A) $28 million <br/> B) $32 million <br/> C) $60 million",
        correctAnswers: ["b", "$32 million", "32 million"]
    },
    {
        question: "Which venture capital firm led Espresso Systems’ $28 million funding round in March 2024?<br/><br/>A) Sequoia Capital <br/> B) a16z Crypto <br/> C) Polychain Capital",
        correctAnswers: ["b", "a16z Crypto"]
    },
    {
        question: "What is the total amount of funds raised by Espresso Systems as of March 2024?<br/><br/>A) $32 million <br/> B) $60 million <br/> C) $100 million",
        correctAnswers: ["b", "$60 million", "60 million"]
    },
    {
        question: "Which notable investor participated in Espresso Systems’ 2022 funding round?<br/><br/>A) Binance Labs <br/> B) Greylock Partners <br/> C) Paradigm",
        correctAnswers: ["b", "Greylock Partners"]
    },
    {
        question: "Who is the CEO of Espresso Systems?<br/><br/>A) Jill Gunter <br/> B) Ben Fisch <br/> C) Charles Lu",
        correctAnswers: ["b", "Ben Fisch"]
    },
    {
        question: "What is the main product of Espresso Systems for improving rollup interoperability?<br/><br/>A) HotShot <br/> B) Shared Sequencer <br/> C) Tiramisu",
        correctAnswers: ["b", "Shared Sequencer"]
    },
    {
        question: "Which consensus protocol does Espresso use for fast confirmations?<br/><br/>A) Proof-of-Work <br/> B) HotShot <br/> C) Proof-of-Stake",
        correctAnswers: ["b", "HotShot"]
    },
    {
        question: "What is the average block confirmation time on Espresso’s mainnet?<br/><br/>A) 6 seconds <br/> B) 12 seconds <br/> C) 1 minute",
        correctAnswers: ["a", "6 seconds", "6s"]
    },
    {
        question: "What is the name of the data availability layer developed by Espresso?<br/><br/>A) Cappuccino <br/> B) Tiramisu <br/> C) Cortado",
        correctAnswers: ["b", "Tiramisu"]
    },
    {
        question: "Which type of blockchain does Espresso Systems primarily aim to improve?<br/><br/>A) Layer 1 <br/> B) Layer 2 <br/> C) Layer 3",
        correctAnswers: ["b", "Layer 2"]
    },
    {
        question: "What major issue with centralized sequencers does Espresso aim to address?<br/><br/>A) Lack of security <br/> B) Censorship risks <br/> C) Low speed",
        correctAnswers: ["b", "Censorship risks"]
    },
    {
        question: "Which type of technology does Espresso natively integrate into its blockchain?<br/><br/>A) Zero-Knowledge Rollups <br/> B) Optimistic Rollups <br/> C) Sidechains",
        correctAnswers: ["a", "Zero-Knowledge Rollups", "zk rollups"]
    },
    {
        question: "What is the name of Espresso’s technology for asset privacy on Ethereum?<br/><br/>A) CAPE <br/> B) ZK-SNARK <br/> C) Espresso Wallet",
        correctAnswers: ["a", "CAPE"]
    },
    {
        question: "What is the purpose of CAPE (Configurable Asset Privacy for Ethereum)?<br/><br/>A) Improve transaction speed <br/> B) Provide customizable privacy guarantees <br/> C) Reduce gas fees",
        correctAnswers: ["b", "Provide customizable privacy guarantees"]
    },
    {
        question: "Which testnet did Espresso launch in collaboration with Caldera?<br/><br/>A) Cappuccino <br/> B) Cortado <br/> C) Latte",
        correctAnswers: ["b", "Cortado"]
    },
    {
        question: "Which Layer 2 project invested in Espresso Systems during the 2024 funding round?<br/><br/>A) Optimism <br/> B) Polygon Labs <br/> C) zkSync",
        correctAnswers: ["b", "Polygon Labs"]
    },
    {
        question: "Which Layer 3 network hosted the sale of Espresso’s 5,000 Composable NFTs?<br/><br/>A) Arbitrum Orbit <br/> B) RariChain <br/> C) Base",
        correctAnswers: ["b", "RariChain"]
    },
    {
        question: "Which protocol did Espresso integrate into its sequencer during testing?<br/><br/>A) Optimism’s OP Stack <br/> B) Binance Smart Chain <br/> C) Solana",
        correctAnswers: ["a", "Optimism’s OP Stack", "Optimism OP Stack"]
    },
    {
        question: "Which project collaborated with Espresso to test BFT confirmations?<br/><br/>A) Celo <br/> B) Avalanche <br/> C) Cardano",
        correctAnswers: ["a", "Celo"]
    },
    {
        question: "Which Arbitrum developer supported Espresso Systems?<br/><br/>A) Offchain Labs <br/> B) Chainlink Labs <br/> C) StarkWare",
        correctAnswers: ["a", "Offchain Labs"]
    },
    {
        question: "Which artist designed Espresso’s 5,000 Composable NFTs?<br/><br/>A) Beeple <br/> B) Martin Egrt <br/> C) Pak",
        correctAnswers: ["b", "Martin Egrt"]
    },
    {
        question: "What is Espresso’s main goal for rollups?<br/><br/>A) Reduce gas fees only <br/> B) Improve interoperability and shared liquidity <br/> C) Create independent blockchains",
        correctAnswers: ["b", "Improve interoperability and shared liquidity"]
    },
    {
        question: "What type of marketplace is Espresso developing?<br/><br/>A) Marketplace for NFTs <br/> B) Marketplace for shared sequencing <br/> C) Marketplace for token trading",
        correctAnswers: ["b", "Marketplace for shared sequencing"]
    },
    {
        question: "What does Espresso’s HotShot feature enable?<br/><br/>A) Rapid block finalization <br/> B) Token creation <br/> C) Wallet management",
        correctAnswers: ["a", "Rapid block finalization"]
    },
    {
        question: "How many chains are connected to Espresso’s mainnet (as of August 2025)?<br/><br/>A) 4 <br/> B) 10 <br/> C) 20",
        correctAnswers: ["a", "4"]
    },
    {
        question: "When did the sale of Espresso’s 5,000 Composable NFTs take place?<br/><br/>A) May 2025 <br/> B) July 2025 <br/> C) March 2025",
        correctAnswers: ["a", "May 2025"]
    },
    {
        question: "What was the price of each Composable NFT during the sale on RariChain?<br/><br/>A) 0.0359 ETH <br/> B) 0.1 ETH <br/> C) 0.01 ETH",
        correctAnswers: ["a", "0.0359 ETH", "0.0359"]
    },
    {
        question: "Which event did Espresso host in San Francisco in July 2025?<br/><br/>A) Build & Brew Hackathon <br/> B) Ethereum 10Y Anniversary <br/> C) WebX Conference",
        correctAnswers: ["b", "Ethereum 10Y Anniversary"]
    },
    {
        question: "Which platform hosted Espresso’s token sale in July 2025?<br/><br/>A) Binance Launchpad <br/> B) Kaito Capital Launchpad <br/> C) Coinbase Launchpad",
        correctAnswers: ["b", "Kaito Capital Launchpad"]
    }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let startTime;
let timerInterval;
const totalDuration = 60 * 1000; // 45 secondes en millisecondes

// Éléments du DOM
const timerElement = document.getElementById("timer");
const questionElement = document.getElementById("question");
const inputElement = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const scoreElement = document.getElementById("score");
const startBtn = document.getElementById("start-btn");

// Modal
const modal = document.getElementById("result-modal");
const finalScoreText = document.getElementById("final-score-text");
const shareBtn = document.getElementById("share-btn");
const restartBtn = document.getElementById("restart-btn");


// Événements
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitAnswer);
inputElement.addEventListener("keyup", (e) => {
    if (e.key === "Enter") submitAnswer();
});
restartBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    startQuiz();
});

function startQuiz() {
    // Réinitialisation
    score = 0;
    currentQuestionIndex = 0;
    inputElement.disabled = false;
    submitBtn.disabled = false;
    submitBtn.style.display = "block";
    inputElement.value = "";
    scoreElement.textContent = "";
    startBtn.style.display = "none";

    // Mélanger les questions
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);

    // Lancer le timer
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 10);

    showQuestion();
}

function updateTimer() {
    const elapsed = Date.now() - startTime;
    const remaining = totalDuration - elapsed;

    if (remaining <= 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00.000";
        endQuiz();
        return;
    }

    const minutes = Math.floor(remaining / 60000);
    const seconds = Math.floor((remaining % 60000) / 1000);
    const milliseconds = remaining % 1000;

    timerElement.textContent =
        `${pad(minutes)}:${pad(seconds)}.${padMilliseconds(milliseconds)}`;
}

function pad(n) {
    return n.toString().padStart(2, '0');
}

function padMilliseconds(ms) {
    return ms.toString().padStart(3, '0');
}

function showQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        clearInterval(timerInterval);
        endQuiz();
        return;
    }

    const q = shuffledQuestions[currentQuestionIndex];
    questionElement.innerHTML = q.question;
    inputElement.value = "";
    inputElement.focus();
}

function submitAnswer() {
    const userAnswer = inputElement.value.trim().toLowerCase();
    const correctAnswers = shuffledQuestions[currentQuestionIndex].correctAnswers.map(ans => ans.toLowerCase());

    if (correctAnswers.includes(userAnswer)) {
        score++;
    }

    currentQuestionIndex++;
    showQuestion();
}

function endQuiz() {
    clearInterval(timerInterval);
    inputElement.disabled = true;
    submitBtn.disabled = true;

    const scoreText = `Your score : ${score}`;
    finalScoreText.textContent = scoreText;

    const tweetText = encodeURIComponent(
        `My Espresso rally score is ${score}\n\nTry it here: \n\n https://enoo-git.github.io/espresso/\n\n@InvestingDams @EspressoSys`
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    shareBtn.onclick = () => window.open(tweetUrl, "_blank");

    modal.classList.remove("hidden");
}