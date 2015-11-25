package com.app.server.businessservice.healthcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.shared.healthcontext.StockUpdate;
import java.lang.Override;
import java.util.List;

@Component
public class StockUpdateBzServiceImpl implements StockUpdateBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<StockUpdate> executeQueryStockUpdate() throws Exception {
        java.util.List<com.app.shared.healthcontext.StockUpdate> listDtoInterface = new java.util.ArrayList<com.app.shared.healthcontext.StockUpdate>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "3BCC374A-1D8F-4747-9C8D-564B177DCB6B");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.app.shared.healthcontext.StockUpdate", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
