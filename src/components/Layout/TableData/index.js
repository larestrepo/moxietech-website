import styles from "./styles.module.css";
import React from "react";
import AnchorIcon from '@site/static/img/icons/anchor.svg';
import PieIcon from '@site/static/img/icons/pie.svg';
import ArrowPointingIn from '@site/static/img/icons/arrow-pointing-in.svg';
import ArrowPointingOut from '@site/static/img/icons/arrow-pointing-out.svg';
import AdjustmentHorizontal from '@site/static/img/icons/adjustments-horizontal.svg';
import AdjustmentVertical from '@site/static/img/icons/adjustments-vertical.svg';
import ArrowUpTray from '@site/static/img/icons/arrow-up-tray.svg';
import ArrowUp from '@site/static/img/icons/arrow-up.svg';
import BriefCase from '@site/static/img/icons/briefcase.svg';
import CubeTransparent from '@site/static/img/icons/cube-transparent.svg';
import PresentationChart from '@site/static/img/icons/presentation-chart-bar.svg';
import BuidingOffice from '@site/static/img/icons/building-office.svg';
import ChartBar from '@site/static/img/icons/chart-bar.svg';
import Check from '@site/static/img/icons/check.svg';
import Clock from '@site/static/img/icons/clock.svg';
import UserCircle from '@site/static/img/icons/user-circle.svg';
import ArrowTurnLeftUp from '@site/static/img/icons/arrow-turn-left-up.svg';

function TableData() {

    return (
        <div className={styles.container}>
            <div className={styles.column}>
            <table className={styles.dataTable}>
                <tbody>
                <tr>
                    <td className={styles.leftAlign}>
                    <AnchorIcon className={styles.icon} /> Ticker
                    </td>
                    <td className={styles.rightAlign}>MOXIE</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <PieIcon className={styles.icon} /> Saturation
                    </td>
                    <td className={styles.rightAlign}>0.67%</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <ArrowPointingIn className={styles.icon} /> Live Stake
                    </td>
                    <td className={styles.rightAlign}>504.53k₳</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <ArrowPointingOut className={styles.icon} /> Active Stake
                    </td>
                    <td className={styles.rightAlign}>504.15k₳</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <AdjustmentHorizontal className={styles.icon} /> Declared Pledge
                    </td>
                    <td className={styles.rightAlign}>87.00k₳</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <AdjustmentVertical className={styles.icon} /> Active Pledge
                    </td>
                    <td className={styles.rightAlign}>122.79k₳</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <ArrowUp className={styles.icon} /> Margin fee
                    </td>
                    <td className={styles.rightAlign}>2%</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <ArrowUpTray className={styles.icon} /> Fixed fee
                    </td>
                    <td className={styles.rightAlign}>340₳</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className={styles.column}>
            <table className={styles.dataTable}>
                <tbody>
                <tr>
                    <td className={styles.leftAlign}>
                    <ChartBar className={styles.icon} /> Recent ROA
                    </td>
                    <td className={styles.rightAlign}>0.363%</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <PresentationChart className={styles.icon} /> Lifetime ROA
                    </td>
                    <td className={styles.rightAlign}>3.92%</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <BriefCase className={styles.icon} /> Blocks in epoch
                    </td>
                    <td className={styles.rightAlign}>0</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <CubeTransparent className={styles.icon} /> Estimated Blocks in Whole Epoch
                    </td>
                    <td className={styles.rightAlign}>0.5</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <BuidingOffice className={styles.icon} /> Blocks Lifetime
                    </td>
                    <td className={styles.rightAlign}>832</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <Check className={styles.icon} /> Lifetime Luck
                    </td>
                    <td className={styles.rightAlign}>100.2%</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <Clock className={styles.icon} /> Created
                    </td>
                    <td className={styles.rightAlign}>31.7.2020</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <UserCircle className={styles.icon} /> Delegators
                    </td>
                    <td className={styles.rightAlign}>39</td>
                </tr>
                <tr>
                    <td className={styles.leftAlign}>
                    <ArrowTurnLeftUp className={styles.icon} /> Pledge leverage
                    </td>
                    <td className={styles.rightAlign}>5.8</td>
                </tr>
                </tbody>
            </table>
            </div>
      </div>
    );
}

export default TableData;