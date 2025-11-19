const overlay = document.querySelector('.overlay');

openModal({
    _id: '64f389465ae26083f39b17a5',
    bodyPart: 'waist',
    equipment: 'body weight',
    gifUrl: 'https://ftp.goit.study/img/power-pulse/gifs/0006.gif',
    name: 'alternate heel touchers',
    target: 'abs',
    description:
        "This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.",
    rating: 3,
    burnedCalories: 116,
    time: 3,
    popularity: 1,
});

function makeStars(rating) {
    const safeRating = Math.max(0, Math.min(5, Number(rating) || 0));
    const full = '★'
        .repeat(safeRating)
        .split('')
        .map(s => `<span class="full">${s}</span>`)
        .join('');
    const empty = '☆'
        .repeat(5 - safeRating)
        .split('')
        .map(s => `<span class="full">${s}</span>`)
        .join('');
    return full + empty;
}

function modalExerciseTemplate(data) {
    const {
        name,
        rating,
        gifUrl,
        target,
        bodyPart,
        equipment,
        popularity,
        burnedCalories,
        description,
        time,
    } = data;
    const starsHtml = makeStars(rating);
    return `
        <div class="modal">
            <div class="modal-img-wrapper">
                <img class="modal-img" src="${gifUrl}" alt="${name}" />
            </div>
            <div class="modal-details">
                <p class="modal-title">${name}</p>
                <div class="modal-rating">
                    <div class="modal-rating-value">${rating}</div>    
                    <div class="modal-rating-stars">${starsHtml}</div>
                </div>
                <div class="info-grid">
                    <div class="info-row">
                        <div class="info-grid-item">
                            <div class="info-grid-label">Target</div>
                            <div class="info-grid-value">${target}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Body Part</div>
                            <div class="info-grid-value">${bodyPart}</div>
                        </div>           
              
                        <div class="info-grid-item">
                            <div class="info-grid-label">Equipment</div>
                            <div class="info-grid-value">${equipment}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Popular</div>
                            <div class="info-grid-value">${popularity}</div>
                        </div>
                        <div class="info-grid-item">
                            <div class="info-grid-label">Burned calories</div>
                            <div class="info-grid-value">${burnedCalories} / ${time}</div>
                        </div>
                    </div>
                </div>

                <p class="modal-description">${description}</p>

            
                    <button type="button" class="modal-btn">Add to favorites</button>
            
            </div>
        </div>`;
}

function openModal(data) {
    overlay.innerHTML = modalExerciseTemplate(data);
}
