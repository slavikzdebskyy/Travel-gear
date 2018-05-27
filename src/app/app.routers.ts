import { MainComponent } from "./main/main.component";
import { ItemContentComponent } from "./main/item-content/item-content.component";
import { ItemSelectedComponent } from "./main/item-content/item-selected/item-selected.component";
import { BagComponent } from "./main/bag/bag.component";


export const Routers = [
	// {path: 'main', component: MainComponent},
	{path: 'item', component: ItemContentComponent},
	{path: 'item/:id', component: ItemSelectedComponent},
	{path: '', component: ItemContentComponent},
	{path: 'mybag', component: BagComponent}
]
