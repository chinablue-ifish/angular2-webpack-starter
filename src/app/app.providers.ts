import {Auth} from "./_shared/api/Auth";
import {AquaticSources} from "./_shared/api/AquaticSources";
import {AquaticSourceItems} from "./_shared/api/AquaticSourceItems";
import {PurchasingOrders} from "./_shared/api/PurchasingOrders";
import {AquaticRegions} from "./_shared/api/AquaticRegions";
import {AquaticSourceVendorMaps} from "./_shared/api/AquaticSourceVendorMaps";

export const UserProviders = [
  Auth,
  AquaticRegions,
  AquaticSources,
  PurchasingOrders,
  AquaticSourceItems,
  AquaticSourceVendorMaps
]
