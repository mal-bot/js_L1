"use strict";
/**
 * Класс хранит в себе информацию о значениях параметров земных станций,
 * введенных на странице или рассчитанных.
 */
class GroundStation {
    constructor(stationType) {
        this.type = stationType; // receive or transmit
    }

    /**
     * Расчет угла места
     */
    calcElevation() {
        const x = Math.cos(deg2rad(this.longitude - satellite.position));
        const y = Math.cos(deg2rad(this.latitude));
        this.elevation = rad2deg(Math.atan((x * y - 0.151) / Math.sqrt(1 - x * x * y * y)));
    }

    /**
     * Расчет расстояния до КА
     */
    calcDistanceToSatellite() {
        const x = Math.cos(deg2rad(this.longitude - satellite.position));
        const y = Math.cos(deg2rad(this.latitude));
        this.distanceToSatellite = 42645 * Math.sqrt(1 - 0.2954 * y * x);
    }

    /**
     * Расчет атмосферных потерь при чистом небе
     */
    calcClearSkyLoss() {
        if (this.frequency < 9) {
            this.clearSkyLoss = (Math.pow(this.frequency, 0.58) * 0.023 + 0.006) / Math.sin(deg2rad(this.elevation));
        } else {
            this.clearSkyLoss = (Math.pow(this.frequency / 9, 2.5) * 0.04 + 0.046) / Math.sin(deg2rad(this.elevation))
        }
    }
    /**
    * Расчет сферических потерь
    */
    calcSphericalLoss() {
        this.waveLength = calcWaveLength(this.frequency);
        this.sphericalLoss = 20 * Math.log10(
            4 * Math.PI * this.distanceToSatellite / this.waveLength);
    }

    /**
     * Расчет суммарных потерь
     */
    calcTotalLoss() {
        if (this.rain === false) {
            this.rainLoss = 0;
        }
        this.totalLoss = this.clearSkyLoss + this.sphericalLoss + this.rainLoss;
    }
}