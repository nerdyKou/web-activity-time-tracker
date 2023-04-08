import { Tab } from "../entity/tab";
import Browser from 'webextension-polyfill';

export interface ITabsRepository {
    getTab(domain:string): Tab | undefined;
    addTab(tab:Browser.Tabs.Tab): Promise<void>;
}