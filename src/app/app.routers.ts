import { MainComponent } from "./main/main.component";
import { ItemContentComponent } from "./main/item-content/item-content.component";


export const Routers = [
	{path: 'main', component: MainComponent},
	{path: '**', component: ItemContentComponent},
	{path: '', component: ItemContentComponent}
]
