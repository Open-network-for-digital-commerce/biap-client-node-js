import { bppSupport } from "../utils/bppApis/index.js";
import { getBaseUri } from "../utils/urlHelper.js";

class BppSupportService {
    
    /**
     * support
     * @param {String} bppUri 
     * @param {Object} context 
     * @param {String} ref_id 
     * @returns 
     */
    async support(bppUri, context = {}, ref_id) {
        try {

            const supportRequest = {
                context: context,
                message: {
                    ref_id: ref_id
                }
            };

            bppUri = getBaseUri(bppUri);
            
            const response = await bppSupport(bppUri, supportRequest);
            return { context: context, message: response.message };
        }
        catch (err) {
            throw err;
        }
    }
}

export default BppSupportService;
