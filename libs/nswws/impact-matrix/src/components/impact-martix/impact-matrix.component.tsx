import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'impact-matrix',
  styleUrl: 'impact-matrix.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class ImpactMatrix {
  /**
   * the impact of the warning 1-4 */
  @Prop() impact: number;
  /**
   * the likelihood of the warning 1-4 */
  @Prop() likelihood: number;

  render() {
    const likelihoodArrow = getAssetPath('./assets/likelihood_arrow.svg');
    const impactArrow = getAssetPath('./assets/impact_arrow.svg');
    const tick = getAssetPath('./assets/tick.svg');

    return (
      <div class="impactMatrix">
        <table>
          <tr>
            <td rowSpan={5} class="likelihoodArrow">
              <img src={likelihoodArrow} />
            </td>
            <td class="cell green"></td>
            <td class="cell yellow">
              {this.impact == 2 && this.likelihood == 4 && <img src={tick} />}
            </td>
            <td class="cell amber">
              {this.impact == 3 && this.likelihood == 4 && <img src={tick} />}
            </td>
            <td class="cell red">
              {this.impact == 4 && this.likelihood == 4 && <img src={tick} />}
            </td>
          </tr>
          <tr>
            <td class="cell green"></td>
            <td class="cell yellow">
              {this.impact == 2 && this.likelihood == 3 && <img src={tick} />}
            </td>
            <td class="cell amber">
              {this.impact == 3 && this.likelihood == 3 && <img src={tick} />}
            </td>
            <td class="cell amber">
              {this.impact == 4 && this.likelihood == 3 && <img src={tick} />}
            </td>
          </tr>
          <tr>
            <td class="cell green"></td>
            <td class="cell green"></td>
            <td class="cell yellow">
              {this.impact == 3 && this.likelihood == 2 && <img src={tick} />}
            </td>
            <td class="cell amber">
              {this.impact == 4 && this.likelihood == 2 && <img src={tick} />}
            </td>
          </tr>
          <tr>
            <td class="cell green"></td>
            <td class="cell green"></td>
            <td class="cell yellow">
              {this.impact == 3 && this.likelihood == 1 && <img src={tick} />}
            </td>
            <td class="cell yellow">
              {this.impact == 4 && this.likelihood == 1 && <img src={tick} />}
            </td>
          </tr>
          <tr>
            <td colSpan={4} class="impactArrow">
              <img src={impactArrow} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
