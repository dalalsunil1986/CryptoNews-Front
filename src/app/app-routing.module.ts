import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeComponent } from './trade/trade.component';
import { HomeComponent } from './home/home.component';
import { MarketcapComponent } from './marketcap/marketcap.component';
import { PriceComponent } from './price/price.component';

const routes: Routes = [
  {
    path: 'trade', component: TradeComponent 
  },
  
  {
    path: 'marketcap', component: MarketcapComponent 
  },
    
  {
    path: 'price', component: PriceComponent 
  },
  
  {
    path: '', component: HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
