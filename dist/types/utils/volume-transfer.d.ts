export default VolumeTransfer;
/**
 * Base class for volume transfer functions.
 *
 * Volume transfer functions convert between slider position (UI space) and
 * player volume (audio space). This allows different scaling behaviors like
 * linear or logarithmic (decibel-based) volume control.
 */
declare class VolumeTransfer {
    /**
     * Convert slider position to player volume.
     *
     * @param {number} sliderPosition - Slider position from 0-1
     * @return {number} Player volume from 0-1
     */
    sliderToVolume(sliderPosition: number): number;
    /**
     * Convert player volume to slider position.
     *
     * @param {number} volume - Player volume from 0-1
     * @return {number} Slider position from 0-1
     */
    volumeToSlider(volume: number): number;
}
/**
 * Linear volume transfer - direct 1:1 mapping between slider and volume.
 *
 * This is the default behavior where moving the slider linearly adjusts
 * the volume linearly. Simple but may not match human perception of loudness.
 */
export class LinearVolumeTransfer extends VolumeTransfer {
}
/**
 * Logarithmic volume transfer using decibel scaling.
 *
 * Provides exponential volume changes as the slider moves linearly, which
 * better matches human perception of loudness. Uses decibel (dB) scaling
 * where volume = 10^(dB/20).
 */
export class LogarithmicVolumeTransfer extends VolumeTransfer {
    /**
     * Creates a logarithmic volume transfer function.
     *
     * @param {number} [dbRange=50] - The decibel range for the transfer function.
     *        Larger values create a more dramatic curve. Typical range: 40-60 dB.
     */
    constructor(dbRange?: number);
    dbRange: number;
    offset: number;
}
//# sourceMappingURL=volume-transfer.d.ts.map