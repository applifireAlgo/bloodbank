package com.app.server.businessservice.healthcontext;
import org.springframework.stereotype.Component;
import com.athena.server.bizService.QueryExecuterService;
import org.springframework.beans.factory.annotation.Autowired;
import com.app.shared.healthcontext.NewFetchBG;
import java.lang.Override;
import java.util.List;

@Component
public class NewFetchBGBzServiceImpl implements NewFetchBGBzService {

    @Autowired
    private QueryExecuterService queryExecuterService;

    @Override
    public List<NewFetchBG> executeQueryNewFetchBG() throws Exception {
        java.util.List<com.app.shared.healthcontext.NewFetchBG> listDtoInterface = new java.util.ArrayList<com.app.shared.healthcontext.NewFetchBG>();
        try {
            atg.taglib.json.util.JSONObject queryParams = new atg.taglib.json.util.JSONObject();
            queryParams.put("queryId", "30D1A20A-E4B0-4B45-8D0D-B7D16CF25873");
            atg.taglib.json.util.JSONArray jsonArray = new atg.taglib.json.util.JSONArray();
            queryParams.put("queryCriteria", jsonArray);
            listDtoInterface = queryExecuterService.getAllQueryData("com.app.shared.healthcontext.NewFetchBG", queryParams);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return listDtoInterface;
    }
}
