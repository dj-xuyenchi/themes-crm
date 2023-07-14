<script>
	import { onMount } from 'svelte';

	onMount(() => {
		let slider_ranges = document.querySelector('.theme-circle__number');
		if (slider_ranges) {
			const circleNumber = document.querySelector('.theme-circle__number');
			const canvasBody = document.querySelector('#circle');
			const dataTarget = canvasBody.getAttribute('data-bs-target');
			const canvasBox = canvasBody.getContext('2d');
			const canvasWidth = canvasBox.canvas.width;
			const canvasHeight = canvasBox.canvas.height;
			const primaryColor = getComputedStyle(document.documentElement).getPropertyValue(
				'--color-primary'
			);

			var canvasIndex = 0;

			const canvasFunctionControl = () => {
				canvasIndex++;
				canvasBox.beginPath();
				canvasBox.clearRect(0, 0, canvasWidth, canvasHeight);
				canvasBox.lineWidth = 10;
				canvasBox.strokeStyle = primaryColor;
				canvasBox.lineCap = 'round';
				canvasBox.arc(100, 100, 95, 0, canvasIndex / 16);
				canvasBox.stroke();
				if (dataTarget <= canvasIndex) {
					clearInterval(canvasInterval);
				}
				circleNumber.textContent = canvasIndex;
			};
			canvasFunctionControl();
			const canvasInterval = setInterval(canvasFunctionControl, 20);
		}
	});
</script>

<div class="theme-circle">
	<div class="theme-circle__content">
		<div class="theme-circle__text">
			<span class="theme-circle__number">0</span>
			<span class="theme-circle__present">%</span>
		</div>
		<canvas id="circle" width="200" height="200" data-bs-target="90" />
	</div>
</div>

<style>
	.theme-circle {
		width: 100%;
		height: 100%;
		background-color: var(--color-white);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 15px 0;
	}

	.theme-circle__content {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		background-color: rgba(251, 53, 134, 0.1);
		-webkit-border-radius: 50%;
		border-radius: 50%;
	}

	.theme-circle__content canvas {
		width: 200px;
		height: 200px;
	}

	.theme-circle__text {
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		width: 180px;
		height: 180px;
		background-color: var(--color-white);
		-webkit-border-radius: 50%;
		border-radius: 50%;
	}

	.theme-circle__text span {
		font-weight: 600;
		font-size: 46px;
		color: var(--color-primary);
	}

	.theme-circle__text span:nth-child(1) {
		font-size: 46px;
	}
</style>
