
document.addEventListener('DOMContentLoaded', () => {

    const controlsConfig = [
        {
            id: 'btn-duration',
            label: 'Button Hover Duration (s)',
            type: 'range',
            min: '0.1',
            max: '1.0',
            step: '0.1',
            varName: '--btn-duration',
            unit: 's',
            defaultValue: 0.2
        },
        {
            id: 'fade-duration',
            label: 'Text Fade Duration (s)',
            type: 'range',
            min: '0.5',
            max: '5.0',
            step: '0.5',
            varName: '--fade-duration',
            unit: 's',
            defaultValue: 2
        },
        {
            id: 'text-delay',
            label: 'Text 2 Delay (s)',
            type: 'range',
            min: '0.1',
            max: '2.0',
            step: '0.1',
            varName: '--text-delay',
            unit: 's',
            defaultValue: 0.3
        },
        {
            id: 'spin-duration',
            label: 'Loader Spin Duration (s)',
            type: 'range',
            min: '0.5',
            max: '3.0',
            step: '0.5',
            varName: '--spin-duration',
            unit: 's',
            defaultValue: 1
        }
    ];

    const controlPanel = document.getElementById('controls-container');
    const root = document.documentElement;


    controlsConfig.forEach(config => {
        const wrapper = document.createElement('div');
        wrapper.className = 'control-group';

        const label = document.createElement('label');
        label.setAttribute('for', config.id);
        label.textContent = `${config.label}: `;

        const valueDisplay = document.createElement('span');
        valueDisplay.id = `${config.id}-val`;
        valueDisplay.textContent = config.defaultValue + config.unit;

        label.appendChild(valueDisplay);

        const input = document.createElement('input');
        input.type = config.type;
        input.id = config.id;
        input.min = config.min;
        input.max = config.max;
        input.step = config.step;
        input.value = config.defaultValue;

        input.addEventListener('input', (e) => {
            const val = e.target.value;
            valueDisplay.textContent = val + config.unit;
            root.style.setProperty(config.varName, val + config.unit);
        });

        wrapper.appendChild(label);
        wrapper.appendChild(input);
        controlPanel.appendChild(wrapper);
    });


    const toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'control-group';


    const pauseBtn = document.createElement('button');
    pauseBtn.textContent = 'Pause Animations';
    pauseBtn.className = 'theme-btn';
    pauseBtn.style.width = '100%';
    pauseBtn.style.marginTop = '1rem';

    let isPlaying = true;

    pauseBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            root.style.setProperty('--anim-play-state', 'running');
            pauseBtn.textContent = 'Pause Animations';
        } else {
            root.style.setProperty('--anim-play-state', 'paused');
            pauseBtn.textContent = 'Play Animations';
        }
    });

    toggleWrapper.appendChild(pauseBtn);
    controlPanel.appendChild(toggleWrapper);
});
