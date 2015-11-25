package com.app.server.businessservice.healthcontext;
import com.app.shared.healthcontext.StockUpdate;
import java.util.List;

public interface StockUpdateBzService {

    public List<StockUpdate> executeQueryStockUpdate() throws Exception;
}
