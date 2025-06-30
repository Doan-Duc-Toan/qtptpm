// Dữ liệu câu hỏi mẫu
const originalQuizData = [
    {
        "id": 1,
        "question": "Analytic approachcó phải là một bước quan trọng trong tiến trình xây dựng một sản phẩm khoa học dữ liệu?",
        "options": [
            "Đương nhiên rồi",
            "Không, ta có thể bỏ qua bước này",
            "Không, nó không liên quan gì đến khoa học dữ liệu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 2,
        "question": "Trong tiến trình xây dựng một sản phẩm khoa học dữ liệu, bước Analytic approach nói đến điều gì?",
        "options": [
            "Việc biến đổi một bài toán thực tế về một bài toán khoa học dữ liệu",
            "Việc chọn một công cụ phân tích để giải quyết một bài toán khoa học dữ liệu",
            "Việc biến đổi một bài toán khoa học dữ liệu về một bài toán thực tế"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 3,
        "question": "Hiểu bài toán thực tế (Business understanding) có phải là một bước quan trọng trong quy trình Khoa học dữ liệu hướng sản phẩm?",
        "options": [
            "Đúng, tất nhiên rồi",
            "Không, chúng ta có thể bỏ qua bước này",
            "Không, nó chẳng liên quan gì đến Khoa học dữ liệu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 4,
        "question": "Trong khoa học dữ liệu, bước hiểu bài toán thực tế (Business understanding) là gì trong quá trình phát triển sản phẩm?",
        "options": [
            "Là bước mà chúng ta cần hiểu rõ nhu cầu thực tế cần giải quyết",
            "Là bước để hiểu các nội dung kinh doanh chính của tổ chức",
            "Là bước để hiểu mối quan hệ giữa nhu cầu kinh doanh và Khoa học dữ liệu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 5,
        "question": "Trong quy trình Khoa học dữ liệu, giai đoạn hiểu/trực quan hoá dữ liệu nên được tiến hành sau bước mô hình hoá không?",
        "options": [
            "Có",
            "Không, nó nên được thực hiện trước",
            "Các đáp án khác đều đúng"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 6,
        "question": "Hình sau đây gợi ý điều gì?",
        "options": [
            "Khoa học dữ liệu là một lĩnh vực liên ngành, nó động đến rất nhiều lĩnh vực khác",
            "Khoa học dữ liệu là phần cốt lõi chung của Khoa học máy tính, Toán học, Thống kê, và Tri thức miền ứng dụng",
            "Khoa học dữ liệu là một ngành, phần giao chung giữa Khoa học máy tính, Toán học, Thống kê, và Tri thức miền ứng dụng"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh1.png"]
    },
    {
        "id": 7,
        "question": "Đánh giá (Evaluation) có phải là một bước cốt lõi trong quy trình Khoa học dữ liệu, dù hướng sản phẩm hay hướng khám phá tri thức, hay không?",
        "options": [
            "Đúng",
            "Không, nó chưa chắc cần thiết khi ta muốn khám phá tri thức mới từ dữ liệu",
            "Không"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 8,
        "question": "Đánh giá (Evaluation) trong quy trình Khoa học dữ liệu có thể bao gồm",
        "options": [
            "Phân tích, kiểm định, so sánh các kết quả từ các kịch bản đã chọn (có thể gồm các kịch bản offline và real-life)",
            "Đánh giá việc triển khai một hệ thống trong thực tế"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 9,
        "question": "Trong Khoa học dữ liệu, điểm khác nhau chính giữa làm sạch và tiền xử lý dữ liệu là gì?",
        "options": [
            "Làm sạch dữ liệu đương đầu phần lớn với dữ liệu nhiễu, trong khi tiền xử lý dữ liệu đương đầu phần lớn với dữ liệu thiếu",
            "Làm sạch dữ liệu đương đầu phần lớn với dữ liệu nhiễu, trong khi tiền xử lý dữ liệu đương đầu phần lớn với dữ liệu dư thừa",
            "Làm sạch dữ liệu thường thực hiện trước tiền xử lý dữ liệu, và nhắm đến việc phát hiện những dữ liệu bẩn",
            "Tiền xử lý dữ liệu bao gồm bước làm sạch dữ liệu"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 10,
        "question": "Phán đoán (Prediction) có phải là nhiệm vụ chính của Khoa học dữ liệu?",
        "options": [
            "Đúng",
            "Không, nó chỉ là một trong những nhiệm vụ trong Khoa học dữ liệu",
            "Không, nó không thuộc lĩnh vực Khoa học dữ liệu"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 11,
        "question": "Phát biểu nào sau đây nói về Lời nguyền của số chiều” (The curse of dimensionality)?",
        "options": [
            "Khi số chiều dữ liệu tăng, kích cỡ của không gian dữ liệu sẽ tăng quá nhanh đến nỗi những tập dữ liệu chúng ta thu thập được sẽ quá thưa thớt (sparse). Việc thưa thớt này sẽ tạo ra thách thức lớn cho các phương pháp phân tích dữ liệu.",
            "Khi số chiều dữ liệu tăng, sự khó khăn trong phân tích dữ liệu sẽ không bị ảnh hưởng nhiều",
            "Số chiều cao có thể tạo ra nhiều khó khăn cho lưu trữ và tính toán"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 12,
        "question": "“Vagueness” là một thách thức trong kỷ nguyên của Dữ liệu lớn và nó đang nói về ...",
        "options": [
            "Việc dữ liệu rất khó hiểu",
            "Vấn đề khó giao tiếp giữa nhà cung cấp và người sử dụng",
            "Khó khăn đối với một người không phải là chuyên gia để diễn giải kết quả phân tích",
            "Mức độ khó hiểu của những mẫu dữ liệu đến trong môi trường luồng",
            "Mức độ khó hiểu của các thuật toán phân tích dữ liệu"
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 13,
        "question": "Variability là một thách thức trong kỷ nguyên của Dữ liệu lớn và nó đang nói về ...",
        "options": [
            "Việc dữ liệu thay đổi nhiều",
            "Những thay đổi có thể xảy ra trong cấu trúc của nguồn dữ liệu",
            "Tốc độ mà dữ liệu đến trong môi trường luồng",
            "Các tốc độ khác nhau mà khi đó các nguồn dữ liệu được làm mới"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 14,
        "question": "Velocity là một thách thức của kỷ nguyên dữ liệu lớn, và nó nói tới",
        "options": [
            "Đặc trưng thay đổi mạnh của dữ liệu",
            "Những tính toán lớn",
            "Đặc trưng đến liên tục và nhanh của dữ liệu",
            "Tốc độ phân tích dữ liệu"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 15,
        "question": "Veracity là một thách thức của kỷ nguyên dữ liệu lớn, và nó nói tới",
        "options": [
            "Đặc trưng thay đổi mạnh của dữ liệu",
            "Những tính toán lớn",
            "Tốc độ đến liên tục của dữ liệu trong môi trường luồng",
            "Đặc trưng thiếu chắc chắn cao, do nhiễu, lỗi, mất mát, sai lệch,... trong dữ liệu"
        ],
        "correct": [3],
        "type": "",
        "explanation": ""
    },
    {
        "id": 16,
        "question": "Khoa học dữ liệu là một lĩnh vực liên ngành và vượt ra ngoài phạm vi của Khoa học máy tính",
        "options": [
            "Đúng",
            "Sai"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 17,
        "question": "Đâu là ví dụ về một XPath đúng?",
        "options": [
            "/node/text()",
            "//Parent[@id='1']/Children/child/@name",
            "span::text",
            "base::attr(href)"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 18,
        "question": "Đâu là ví dụ về một XPath đúng?",
        "options": [
            "//a[contains(@href, 'image')]/@href",
            "a[href*=image]::attr(href)",
            "//base/@href",
            "base::attr(href)"
        ],
        "correct": [0, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 19,
        "question": "Đâu là ví dụ về một CSS selector đúng?",
        "options": [
            "//a[contains(@href, 'image')]/@href",
            "a[href*=image]::attr(href)",
            "a[href*=image]@attr(href)",
            "//a[contains(@href, 'image')]::@href"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 20,
        "question": "Thuật toán PageRank được sử dụng cho mục đích gì?",
        "options": [
            "Để tìm kết quả phù hợp nhất với một truy vấn",
            "Để đo lường tầm quan trọng của một trang web",
            "Để xác định mức độ phổ biến của một trang web",
            "Để sắp xếp kết quả của công cụ tìm kiếm"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 21,
        "question": "Làm thế nào để có thể bóc tách được dữ liệu mong muốn khi viết bot thu thập dữ liệu trên Scrapy?",
        "options": [
            "Sử dụng bộ chọn (selector) XPath và CSS để viết downloaders",
            "Sử dụng bộ chọn (selector) XPath và CSS để viết spiders",
            "Sử dụng bộ chọn (selector) XPath và CSS để viết item pipelines"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 22,
        "question": "Đâu là ví dụ về một CSS selector đúng?",
        "options": [
            "/node/text()",
            "//Parent[@id='1']/Children/child/@name",
            "span::text",
            "base::attr(href)"
        ],
        "correct": [2, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 23,
        "question": "Scrapy bot có thể bỏ qua thông tin trong robots.txt hay không?",
        "options": [
            "Có",
            "Không"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 24,
        "question": "Scrapy có hỗ trợ mặc định cơ chế thu thập dữ liệu tăng dần (incremental crawling) hay không?",
        "options": [
            "Không",
            "Có"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 25,
        "question": "Sử dụng robots.txt có chặn được các chương trình cào dữ liệu Internet hay không?",
        "options": [
            "Không",
            "Có"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 26,
        "question": "Theo Scrapy, đâu là nơi có thể ép buộc các yêu cầu tải trang web phải sử dụng proxy?",
        "options": [
            "Downloader middlewares",
            "Spider middlewares",
            "Downloader",
            "Spider",
            "Item pipelines"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 27,
        "question": "Trong Scrapy, đâu là nơi có thể thay đổi thuộc tính user-agent trong quá trình thu thập dữ liệu?",
        "options": [
            "Downloader middlewares",
            "Spider middlewares",
            "Downloader",
            "Spider"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 28,
        "question": "Trong Scrapy, làm thế nào để ghi dữ liệu thu thập được vào các cơ sở dữ liệu?",
        "options": [
            "Viết mã lệnh thêm vào trong spider middleware",
            "Viết mã lệnh thêm vào trong item pipelines",
            "Viết mã lệnh thêm vào trong downloader"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 29,
        "question": "Trong Scrapy, vai trò của thành phần downloader là gì?",
        "options": [
            "Nhận các yêu cầu (requests) từ engine và đưa vào hàng đợi",
            "Tải về các trang web",
            "Bóc tách các trả lời (responses)"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 30,
        "question": "Trong Scrapy, vai trò của thành phần spider là gì?",
        "options": [
            "Bóc tách các trả lời (responses)",
            "Tải về nội dung các trang web",
            "Điều phối luồng dữ liệu giữa tất cả các thành phần của Scrapy"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 31,
        "question": "Đâu là giải thuật dùng để xếp thứ hạng các trang web trong kết quả trả về của máy tìm kiếm?",
        "options": [
            "WebRank",
            "PageRank",
            "TextRank"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 32,
        "question": "Điều nào sau đây mô tả chính xác XPath?",
        "options": [
            "XPath là một ngôn ngữ lập trình",
            "XPath là một ngôn ngữ truy vấn",
            "XPath là cấu trúc tệp tin XML",
            "XPath có thể được đọc bởi Microsoft Word"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 33,
        "question": "Bước nào trong phương pháp làm sạch dữ liệu sau đây không theo thứ tự thích hợp?",
        "options": [
            "Trích xuất các trường dữ liệu có liên quan",
            "Sửa chữa các vấn đề về chất lượng dữ liệu ở mức giá trị",
            "Chuẩn hóa giá trị dữ liệu",
            "Khắc phục các vấn đề về chất lượng dữ liệu ở mức tập giá trị",
            "Sửa chữa các vấn đề về chất lượng dữ liệu ở cấp độ quan hệ",
            "Lấy phản hồi của người dùng"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },

    {
        "id": 34,
        "question": "Google OpenRefine có thể nhập dữ liệu từ Internet qua URL được không?",
        "options": [
            "Có.",
            "Không."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 35,
        "question": "Google OpenRefine có thể được sử dụng để tự động phân nhóm dữ liệu không?",
        "options": [
            "Có",
            "Không"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 36,
        "question": "Kỹ thuật faceting trong Google OpenRefine là gì?",
        "options": [
            "Cho phép nhìn thấy bức tranh toàn cảnh về dữ liệu.",
            "Cho phép lọc xuống chỉ tập hợp con các hàng mà bạn muốn thay đổi hàng loạt.",
            "Cho phép thực hiện các phán đoán xu thế từ dữ liệu."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 37,
        "question": "Tại sao dữ liệu ngoài thực tiễn lại không sạch?",
        "options": [
            "Không đầy đủ.",
            "Có nhiễu.",
            "Không nhất quán."
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 38,
        "question": "Đặc trưng mô hình hoá dữ liệu trong OLAP?",
        "options": [
            "Lược đồ CSDL cần được chuẩn hoá, đảm bảo dữ liệu được nhất quán.",
            "Thường sử dụng lược đồ CSDL phi chuẩn hoá.",
            "Thường sử dụng mô hình dữ liệu đa chiều."
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 39,
        "question": "Đâu không phải là nguyên nhân dẫn đến dữ liệu bị nhiễu?",
        "options": [
            "Phương tiện, thiết bị thu thập dữ liệu bị lỗi.",
            "Lỗi do người nhập dữ liệu vào hệ thống.",
            "Do nhu cầu về dữ liệu khác nhau giữa thời điểm thu thập dữ liệu và thời điểm tiến hành phân tích dữ liệu."
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 40,
        "question": "Đâu không phải là vấn đề về chất lượng dữ liệu ở mức giá trị (value level)?",
        "options": [
            "Giá trị bị thiếu.",
            "Vi phạm cú pháp.",
            "Các từ đồng nghĩa."
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 41,
        "question": "Đâu không phải là vấn đề về chất lượng dữ liệu ở mức tập giá trị (value set level)?",
        "options": [
            "Tồn tại các từ đồng âm khác nghĩa.",
            "Vi phạm tính duy nhất.",
            "Vi phạm ràng buộc toàn vẹn.",
            "Vi phạm tập xác định."
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 42,
        "question": "Đâu là đặc trưng của OLAP?",
        "options": [
            "Chủ yếu là các giao dịch thêm, sửa, xoá có thời gian thực hiện ngắn.",
            "Các truy vấn thường phức tạp và bao gồm các phép toán kết tập.",
            "Chủ yếu là các truy vấn ad-hoc.",
            "Thường truy cập tới nhiều bản ghi dữ liệu.",
            "Hỗ trợ ra quyết định."
        ],
        "correct": [1, 2, 3, 4],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 43,
        "question": "Đâu là đặc trưng của OLTP?",
        "options": [
            "Chủ yếu là các giao dịch thêm, sửa, xoá có thời gian thực hiện ngắn.",
            "Hỗ trợ xử lý giao dịch, vận hành hàng ngày cho doanh nghiệp.",
            "Thường truy cập tới dữ liệu lịch sử, dữ liệu đa chiều.",
            "Thường là các truy vấn phức tạp."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 44,
        "question": "Điều nào dưới đây là không đúng về OLAP?",
        "options": [
            "Xử lý thông tin có tính lịch sử (được tạo ra trong quá khứ).",
            "Hỗ trợ phân tích nghiệp vụ.",
            "Khả mở, cho phép hàng triệu người sử dụng.",
            "Lưu trữ hàng triệu bản ghi dữ liệu."
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 45,
        "question": "Đâu là phát biểu đúng về Wrapper trong kiến trúc tích hợp dữ liệu ảo?",
        "options": [
            "Là đoạn chương trình chuyển đổi dữ liệu từ định dạng ở nguồn qua định dạng chuẩn hoá của mediator",
            "Có thể cài đặt ở phía nguồn dữ liệu hoặc phía mediator",
            "Là thành phần không thể thiếu của mediator"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 46,
        "question": "Đâu là siêu dữ liệu có trong Danh mục nguồn dữ liệu (Data source catalog) trong kiến trúc tích hợp dữ liệu ảo?",
        "options": [
            "Danh sách các bản dữ liệu của nguồn",
            "Khả năng truy vấn của nguồn (vd., Khả năng trả lời SQL)",
            "Tần suất cập nhật dữ liệu",
            "Kiểm soát truy cập, phân quyền"
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 47,
        "question": "Đâu là phát biểu đúng về Apache NiFi?",
        "options": [
            "Một công cụ ETL.",
            "Một nền tảng kho dữ liệu cho phép lưu trữ dữ liệu kích thước lớn.",
            "Một công cụ cho phép làm sạch và tiền xử lý dữ liệu."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 48,
        "question": "Đâu là các khái niệm có trong Apache NiFi?",
        "options": [
            "FlowFile",
            "FlowFile Processor",
            "Scheduler",
            "Process Group"
        ],
        "correct": [0, 1, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 49,
        "question": "Đâu là các chiều thang đo khi nói về chất lượng dữ liệu?",
        "options": [
            "Đầy đủ (Completeness), Xác thực (Validity), Toàn vẹn (Integrity)",
            "Tính thời điểm (Timeliness), Chính xác (Accuracy), Nhất quán (Consistency)",
            "Tính thời điểm (Timeliness), Tính cô lập (Isolation)",
            "Đầy đủ (Completeness), Toàn vẹn (Integrity), Giá trị (Value)"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 50,
        "question": "Biểu đồ này thể hiện điều gì?",
        "options": [
            "Một biểu đồ cột thể hiện chiều cao của cây và số lượng cây tương ứng với chiều cao đó.",
            "Một biểu đồ histogram thể hiện phân bố chiều cao của cây.",
            "Một biểu đồ cột vẽ nhầm cần đổi tên trục tung và trục hoành."
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh2.png"]
    },
    {
        "id": 51,
        "question": "Biểu đồ box plot cho phép rút ra kết luận gì trong phân tích thăm dò dữ liệu?",
        "options": [
            "Có đặc trưng (biến) nào quan trọng?",
            "Độ tập trung vị trí có khác nhau giữa các nhóm con không?",
            "Độ biến thiên có khác nhau giữa các nhóm con không?",
            "Có ngoại lệ không?"
        ],
        "correct": [0, 1, 2, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 52,
        "question": "Biểu đồ histogram cho phép rút ra kết luận gì trong phân tích thăm dò dữ liệu?",
        "options": [
            "Xem xét phân bố của tập các quan sát.",
            "Xem xét độ tập trung của dữ liệu.",
            "Xem xét sự phân tán của dữ liệu.",
            "Phân bố của dữ liệu là đối xứng hay lệch.",
            "Có ngoại lệ trong dữ liệu không?"
        ],
        "correct": [0, 1, 2, 3, 4],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 53,
        "question": "Biểu đồ scatter plot cho phép rút ra kết luận gì trong phân tích thăm dò dữ liệu?",
        "options": [
            "Có mối quan hệ giữa biến X và Y hay không?",
            "Mối liên hệ có phải là tuyến tính hay không?",
            "Sự biến thiên của biến Y có phụ thuộc vào biến X hay không?",
            "Biến X, Y biến nào quan trọng hơn."
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 54,
        "question": "Phân tích thăm dò dữ liệu (EDA) là gì?",
        "options": [
            "EDA không phải là một tập các kỹ thuật, mà là một triết lý về cách mà chúng ta nên làm khi muốn hiểu về dữ liệu",
            "EDA là tập các kỹ thuật cho phép chúng ta hiểu về dữ liệu bao gồm việc sử dụng các biểu đồ và các kỹ thuật thống kê.",
            "EDA là việc sử dụng các biểu đồ để hiểu dữ liệu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 55,
        "question": "Thực hiện phân tích thăm dò dữ liệu như thế nào?",
        "options": [
            "Xem xét các thuộc tính mô tả độ đo trung tâm và độ đo phân tán của dữ liệu",
            "Xem xét phân bố của dữ liệu",
            "Xem xét các mối liên hệ giữa các biến trong dữ liệu",
            "Xem xét đặc trưng cấu trúc của dữ liệu"
        ],
        "correct": [0, 1, 2, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 56,
        "question": "Trọng tâm của phân tích thăm dò dữ liệu EDA là gì?",
        "options": [
            "EDA quan tâm tới cấu trúc, các ngoại lệ, và các mô hình từ dữ liệu",
            "EDA quan tâm tới tất cả các điểm dữ liệu trong tập dữ liệu",
            "Trực quan hoá và làm sạch dữ liệu",
            "EDA quan tâm tới các công cụ cho phép xem xét cấu trúc, các ngoại lệ từ dữ liệu"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 57,
        "question": "Với biểu đồ dưới đây thì phát biểu nào sai?",
        "options": [
            "Số lượng các cây có chiều cao từ 250 tới 300 là nhiều nhất.",
            "Số lượng các cây có chiều cao từ 100 tới 150 là nhỏ nhất.",
            "Có 30 cây có chiều cao là 150.",
            "Có ít hơn hoặc bằng 50 cây có chiều cao là 300."
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh2.png"]
    },
    {
        "id": 58,
        "question": "Với cùng 1 tập dữ liệu, kết quả của giải thuật phân cụm K-means phụ thuộc vào những yếu tố nào?",
        "options": [
            "Cách tính độ đo khoảng cách.",
            "Cách gộp các cụm.",
            "Cấu hình số cụm ban đầu K.",
            "Một phép đoán khởi đầu cho các centroids."
        ],
        "correct": [0, 2, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 59,
        "question": "Với cùng 1 tập dữ liệu, kết quả của giải thuật phân cụm phân cấp (Hierarchical clustering) phụ thuộc vào những yếu tố nào?",
        "options": [
            "Cách tính độ đo khoảng cách.",
            "Cách gộp các cụm.",
            "Cấu hình số cụm ban đầu K."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 60,
        "question": "Đâu là các thư viện và công cụ có thể sử dụng để thực hiện phân tích thăm dò dữ liệu?",
        "options": [
            "NLTK, Spacy",
            "Requests, Scrapy, BeautifulSoup",
            "Tensorflow, Keras, Scikit-learn",
            "SciPy, NumPy, Matplotlib and Pandas"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 61,
        "question": "Khả năng tổng quát hoá (Generalization) và Quá khớp (overfitting) là hai mặt đối lập của các mô hình học máy",
        "options": [
            "Đúng",
            "Không, chúng chưa chắc đã đối lập nhau",
            "Chúng là hai đặc trưng độc lập"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 62,
        "question": "Giả sử bạn muốn sử dụng một phương pháp học máy để phân tích tri thức ẩn bên trong một tập dữ liệu, nhưng không có ý niệm gì về những tri thức đó. Bạn có thể đưa về bài toán nào sau đây là phù hợp nhất?",
        "options": [
            "Học không giám sát (Unsupervised learning)",
            "Học có giám sát (Supervised learning)",
            "Hồi quy (Regression)",
            "Phân loại nhiều lớp (Multiclass classification)"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 63,
        "question": "Quá trình học một cây quyết định bằng thuật toán ID3 sẽ dừng nếu",
        "options": [
            "Cây đã phân loại chính xác hoàn toàn dữ liệu huấn luyện, hoặc tại bất kỳ một đường đi nào từ gốc đến lá, các thuộc tính đã được dùng hết",
            "Cây đã phân loại chính xác hoàn toàn dữ liệu huấn luyện",
            "Cây đã đủ lớn",
            "Cây không thể phân loại chính xác hoàn toàn dữ liệu huấn luyện"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 64,
        "question": "Vai trò của information gain trong thuật toán ID3 khi học một cây quyết định là gì?",
        "options": [
            "Đo đạc tính phân biệt của các thuộc tính để tìm một thuộc tính kiểm tra tại mỗi đỉnh",
            "Để xem độ tốt của một thuộc tính sau quá trình huấn luyện",
            "Để đo đạc lỗi tại mỗi đỉnh trong cây",
            "Không có vai trò gì"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 65,
        "question": "K-means là gì?",
        "options": [
            "Một phương pháp phân cụm",
            "Một phương pháp phân loại",
            "Một phương pháp học có giám sát",
            "Một phương pháp để tính trung bình số học từ dữ liệu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 66,
        "question": "Một phương pháp học máy có khả năng học được gì?",
        "options": [
            "Một hàm mà có khả năng ánh xạ một điểm dữ liệu đầu vào đến một đầu ra",
            "Tri thức mới để phán đoán đầu ra",
            "Học để mô phỏng khả năng của con người",
            "Bất kỳ thứ gì"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 67,
        "question": "Sự khác nhau giữa học có giám sát và không giám sát nằm ở đâu?",
        "options": [
            "Tập huấn luyện, trong đó học có giám sát thường yêu cầu nhãn/đầu ra cho mỗi mẫu dữ liệu",
            "Kiểu đầu ra, trong đó học có giám sát thường có đầu ra là số thực",
            "Cách chúng ta huấn luyện một mô hình, học có giám sát thường yêu cầu chỉ dẫn chi tiết từng bước học ra sao",
            "Mục tiêu của thuật toán, học không giám sát thường không thực hiện phán đoán nào cả"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 68,
        "question": "Phương pháp bình phương tối thiểu học một hàm f(x)=w₀+w₁x₁+...+wₙxₙ từ một tập học có cỡ M bằng cách tìm vectơ w*=(w*₀,w*₁,...,w*ₙ), trong đó",
        "options": [
            "w* = arg min_w Σ_{i=1}^M (y_i − w₀ − w₁x_{i1} − ... − wₙx_{in})",
            "w* = arg min_w Σ_{i=1}^M (y_i − w₀ − w₁x_{i1} − ... − wₙx_{in})²",
            "w* = arg min_w Σ_{i=1}^M (y_i − w₀ − w₁x_{i1} − ... − wₙx_{in})² + λ‖w‖²₂"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 69,
        "question": "Vai trò của hàm lỗi thực nghiệm (empirical loss) là gì?",
        "options": [
            "Để đo đạc lỗi phán đoán theo một nghĩa nào đó và hay được dùng làm hàm mục tiêu khi huấn luyện một mô hình",
            "Để đo đạc lỗi phán đoán trong tương lai",
            "Không có vai trò gì"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 70,
        "question": "Học máy (Machine Learning) cung cấp các phương pháp để phân tích dữ liệu và tạo các phán đoán cho dữ liệu trong tương lai",
        "options": [
            "Đúng",
            "Sai, nó cung cấp các nền tảng để mở rộng tính toán",
            "Đúng, nó còn cung cấp các nền tảng để tăng tốc tính toán"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 71,
        "question": "Định lý No-free-lunch nói đến điều gì?",
        "options": [
            "Không có thuật toán nào có thể đánh bại một thuật toán khác trên mọi miền bài toán",
            "Không có bữa trưa miễn phí nào cho ai",
            "Nếu không cố gắng nhất, một thuật toán không thể đánh bại các thuật toán khác"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 72,
        "question": "Overfitting nói đến tình huống nào?",
        "options": [
            "Một phương pháp tạo ra tỉ lệ lỗi bé trên tập huấn luyện, nhưng có tỉ lệ lỗi lớn trên dữ liệu trong tương lai",
            "Một phương pháp có thể phán đoán không chính xác về hành vi của một phương pháp khác",
            "Quá ít dữ liệu huấn luyện",
            "Có quá nhiều dữ liệu huấn luyện đến nỗi một máy tính có thể học dễ dàng"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 73,
        "question": "Kỹ thuật nào sau đây có thể giúp giảm overfitting?",
        "options": [
            "Sử dụng hiệu chỉnh (regularization), kỹ thuật thường giúp hạn chế không gian tìm kiếm khi huấn luyện một mô hình",
            "Dùng một phương pháp/mô hình mới",
            "Bỏ bớt dữ liệu nếu có quá nhiều"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 74,
        "question": "Học máy xuất hiện ở đâu trong một quy trình khoa học dữ liệu?",
        "options": [
            "Bước mô hình hoá (modeling), nơi mà chúng ta dùng một phương pháp cụ thể để phân tích dữ liệu",
            "Bước hiểu dữ liệu",
            "Bước lựa chọn một cách tiếp cận để giải bài toán đang có"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 75,
        "question": "Veracity là một thách thức liên quan đến dữ liệu lớn và đề cập đến",
        "options": [
            "Các loại dữ liệu khác nhau phải được xử lý: dữ liệu có cấu trúc / không có cấu trúc.",
            "Sức mạnh tính toán mà dữ liệu lớn yêu cầu.",
            "Dữ liệu đến liên tục và nhanh chóng.",
            "Dữ liệu có độ không chắc chắn cao do sự hiện diện của thông tin giả mạo / nhiễu trong một số nguồn (đặc biệt là trên internet)."
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 76,
        "question": "Variety là một thách thức liên quan đến dữ liệu lớn và đề cập đến",
        "options": [
            "Các loại dữ liệu khác nhau phải được xử lý: dữ liệu có cấu trúc / không có cấu trúc.",
            "Sức mạnh tính toán mà dữ liệu lớn yêu cầu.",
            "Dữ liệu đến liên tục và nhanh chóng.",
            "Dữ liệu có độ không chắc chắn cao do sự hiện diện của thông tin giả mạo / nhiễu trong một số nguồn (đặc biệt là trên internet)."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 77,
        "question": "Làm cách nào để phân tích dữ liệu khả mở cho dữ liệu lớn?",
        "options": [
            "Song song hoá các giải thuật học máy",
            "Sử dụng kiến trúc xử lý thời gian thực",
            "Sử dụng phân tích thành phần chính (PCA)",
            "Sử dụng mô hình mạng thần kinh sâu"
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 78,
        "question": "Chỉ ra phát biểu đúng:",
        "options": [
            "Hadoop cần chạy trên phần cứng chuyên biệt, cấu hình cao để xử lý dữ liệu lớn.",
            "Hadoop 2.0 trở lên cho phép chạy các công việc không phải là các công việc MapReduce.",
            "Trong khung lập trình Hadoop, các tệp tin kết quả được phân chia thành các dòng hoặc bản ghi.",
            "Không đáp án nào đúng."
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 79,
        "question": "Chọn phát biểu đúng:",
        "options": [
            "MapReduce thực hiện mang dữ liệu tới các nút tính toán.",
            "MapReduce mang tính toán tới các nút chứa dữ liệu.",
            "Dữ liệu cho MapReduce bắt buộc nằm trên HDFS.",
            "Tất cả các đáp án."
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 80,
        "question": "Phát biểu nào sau đây không đúng về Apache Hadoop?",
        "options": [
            "Xử lý dữ liệu phân tán với mô hình lập trình đơn giản, thân thiện hơn như MapReduce.",
            "Hadoop thiết kế để mở rộng thông qua kỹ thuật scale-out, tăng số lượng máy chủ",
            "Thiết kế để vận hành trên phần cứng phổ thông, có khả năng chống chịu lỗi phần cứng",
            "Thiết kế để vận hành trên siêu máy tính, cấu hình mạnh, độ tin cậy cao"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 81,
        "question": "Công cụ nào có thể sử dụng để hỗ trợ import, export dữ liệu vào ra hệ sinh thái Hadoop?",
        "options": [
            "Oozie",
            "Flume",
            "Sqoop",
            "Hive"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 82,
        "question": "Vai trò của YARN?",
        "options": [
            "Quản lý và phân phối tài nguyên trong cụm Hadoop",
            "Cung cấp giao diện người dùng mức cao, biến đổi truy vấn thành các job MapReduce",
            "Cung cấp các chức năng phối hợp phân tán độ tin cậy cao như quản lý thành viên, bầu cử, giám sát trạng thái hệ thống"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 83,
        "question": "Hadoop là một hệ sinh thái bao gồm các thành phần nào:",
        "options": [
            "MapReduce, YARN",
            "MapReduce, MySQL",
            "MapReduce, Skykeeper",
            "MapReduce, Heron"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 84,
        "question": "Hadoop đạt được độ tin cậy thông qua cơ chế nhân bản dữ liệu trên nhiều máy chủ, do đó không yêu cầu ...... trên các nút máy chủ này.",
        "options": [
            "RAID.",
            "Hệ thống tệp tin cục bộ (Local file system).",
            "Hệ điều hành."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 85,
        "question": "Hàm ...... chịu trách nhiệm tổng hợp kết quả từ các tác vụ Map().",
        "options": [
            "Reduce.",
            "Map.",
            "Sort.",
            "Không có phương án nào."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 86,
        "question": "Cơ chế tổ chức dữ liệu của Datanode trong HDFS?",
        "options": [
            "Các chunk là các tệp tin trong hệ thống tệp tin cục bộ của máy chủ datanode.",
            "Các chunk là các vùng dữ liệu liên tục trên ổ cứng của máy chủ datanode.",
            "Các chunk được lưu trữ tin cậy trên datanode theo cơ chế RAID."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 87,
        "question": "Cơ chế nhân bản dữ liệu trong HDFS?",
        "options": [
            "Namenode quyết định vị trí các nhân bản của các chunk trên datanode.",
            "Datanode là primary quyết định vị trí các nhân bản của các chunk tại các secondary datanode.",
            "Client quyết định vị trí lưu trữ các nhân bản với từng chunk."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 88,
        "question": "HDFS được lập trình bằng ngôn ngữ nào?",
        "options": [
            "C++.",
            "Java.",
            "Scala.",
            "Không đáp án nào đúng."
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 89,
        "question": "Tác vụ ...... có trách nhiệm xử lý một hoặc vài khối (chunk) dữ liệu và trả ra kết quả trung gian.",
        "options": [
            "Map.",
            "TaskTracker.",
            "Tất cả các phương án.",
            "Reduce."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 90,
        "question": "Thành phần ...... có trách nhiệm thực thi các tác vụ (task) được giao bởi JobTracker.",
        "options": [
            "MapReduce",
            "Mapper",
            "TaskTracker",
            "JobTracker"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 91,
        "question": "Tình huống nào sau đây có thể không phù hợp với HDFS?",
        "options": [
            "Đọc, ghi ngẫu nhiên vào tệp tin.",
            "Lưu trữ dữ liệu liên quan đến các ứng dụng yêu cầu quyền truy cập dữ liệu có độ trễ thấp.",
            "Lưu trữ các tệp tin kích thước nhỏ.",
            "Không có đáp án đúng"
        ],
        "correct": [0, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 92,
        "question": "Đưa ra phát biểu đúng:",
        "options": [
            "Một công việc MapReduce thường chia tập dữ liệu đầu vào thành các phần độc lập được các tác vụ map xử lý theo cách hoàn toàn song song",
            "MapReduce xem dữ liệu là các cặp khoá-giá trị.",
            "Các ứng dụng thường triển khai các giao diện Mapper và Reducer để cài đặt các phương thức map và reduce.",
            "MapReduce chỉ làm việc với dữ liệu trên Hadoop HDFS."
        ],
        "correct": [0, 1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 93,
        "question": "Đưa ra đáp án đúng:",
        "options": [
            "Hive không phải là một cơ sở dữ liệu quan hệ mà là một công cụ truy vấn hỗ trợ SQL để truy vấn dữ liệu",
            "HBase là một cơ sở dữ lớn có hỗ trợ SQL",
            "Pig là một cơ sở dữ liệu quan hệ có hỗ trợ SQL",
            "Tất cả các phương án."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 94,
        "question": "Một trang tin cậy (authority page) về một chủ đề là gì?",
        "options": [
            "Là trang được trỏ tới từ nhiều hub tốt",
            "Là trang được trỏ tới từ nhiều trang tin cậy",
            "Là trang trỏ đến nhiều hubs tốt"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 95,
        "question": "Xét ma trận ˆP thu được bằng cách cộng số 0.1 vào tất cả các phần tử của ma trận xác suất chuyển P ở trên. Vậy ˆP có tạo ra một chuỗi ergodic Markov không?",
        "options": [
            "Có",
            "Không",
            "Chúng ta không thể nói gì về tính ergodic"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh4.png"]
    },
    {
        "id": 96,
        "question": "Giá trị của ô [1,1] trong ma trận kề của đồ thị sau là bao nhiêu?",
        "options": [
            "0",
            "1",
            "2",
            "4"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh5.png"]
    },
    {
        "id": 97,
        "question": "Một chuỗi Markov ergodic là gì?",
        "options": [
            "Một chuỗi cho phép ta có thể đi dần dần từ bất kỳ trạng thái nào đến bất kỳ trạng thái khác với xác suất dương",
            "Một chuỗi cho phép ta có thể đi trực tiếp từ bất kỳ trạng thái nào đến bất kỳ trạng thái khác với xác suất dương",
            "Một chuỗi mà trong đó tồn tại một cặp trạng thái không thể đi đến nhau"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 98,
        "question": "Thuật toán PageRank xếp hạng các trang web như thế nào?",
        "options": [
            "PageRank sử dụng tỉ lệ ghé thăm dài hạn (long-term visit rate) của mỗi trang web, và tỉ lệ đó được tính từ ma trận xác suất chuyển",
            "PageRank sử dụng số lượng kết nối vào mỗi trang web",
            "PageRank sử dụng số lượng kết nối ra từ mỗi trang web",
            "PageRank xếp hạng một cách ngẫu nhiên"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 99,
        "question": "Tác vụ nào không có trong phân tích liên kết?",
        "options": [
            "Xếp hạng đồ thị",
            "Nhận diện cộng đồng",
            "Dự đoán liên kết",
            "Phân tích cảm xúc"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 100,
        "question": "Phương pháp mũ (Power method) có thể ...",
        "options": [
            "tính tỉ lệ ghé thăm dài hạn cho mỗi trang web",
            "tính phân bố xác suất trạng thái dừng (steady-state probability distribution) cho một chuỗi Markov",
            "dùng một chuỗi Markov để dự đoán một chuỗi các trang sẽ ghé thăm",
            "tính một chuỗi các trang sẽ ghé thăm, khi cho trước điểm xuất phát"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 101,
        "question": "Cho ma trận xác suất chuyển P ở trên. Cho biết P có tạo ra một chuỗi ergodic Markov không?",
        "options": [
            "Có",
            "Không"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh6.png"]
    },
    {
        "id": 102,
        "question": "Sự khác nhau giữa tập cơ sở (Base set S) và tập gốc (Root set W) trong thuật toán HITS là gì?",
        "options": [
            "Tập cơ sở được xây dựng từ tập gốc",
            "Tập gốc được xây dựng từ tập cơ sở",
            "Tập cơ sở là cơ sở để đánh giá chất lượng của các trang tìm được bởi HITS, dựa trên tập gốc"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 103,
        "question": "Thuật toán HITS xếp hạng các trang web như thế nào?",
        "options": [
            "HITS tìm ra một tập nhỏ các hubs và các trang tin cậy, sử dụng một thuật toán lặp để tính toán điểm số cho các trang",
            "HITS tìm ra một tập nhỏ các trang tin cậy, sử dụng một thuật toán lặp để tính toán phân bố xác suất trạng thái dừng",
            "HITS tìm ra một tập nhỏ các trang tin cậy, sử dụng một thuật toán lặp để tính toán tỉ lệ ghé thăm dài hạn"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 104,
        "question": "Trong các độ đo thứ hạng đỉnh dưới đây, độ đo nào chỉ dựa trên các đỉnh liền kề của đỉnh đang xét",
        "options": [
            "Độ trung tâm lân cận (Closeness centrality)",
            "Độ trung tâm trung gian (Betweenness centrality)",
            "Độ quan trọng theo bậc (Degree prestige)",
            "Độ quan trọng lân cận (Proximity prestige)"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 105,
        "question": "Có bao nhiêu đường đi ngắn nhất từ A tới K trong đồ thị sau?",
        "options": [
            "4",
            "5",
            "6",
            "7"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh7.png"]
    },
    {
        "id": 106,
        "question": "Sử dụng thuật toán Dijkstra, đường đi ngắn nhất từ s tới c có độ dài...",
        "options": [
            "8",
            "10",
            "6",
            "Không có đường đi từ s tới c"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh8.png"]
    },

    {
        "id": 108,
        "question": "Nếu độ sáng của một ảnh đa mức xám là 255, ảnh có đặc điểm nào dưới đây?",
        "options": [
            "Ảnh trắng toàn bộ",
            "Ảnh đen toàn bộ",
            "Ảnh có một vài khối đen, một vài khối trắng",
            "Không có điểm gì quá đặc biệt, có các điểm ảnh có thể nhận giá trị đa dạng trong miền giá trị của nó."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 109,
        "question": "Nếu độ sáng của một ảnh đa mức xám là 0, ảnh có đặc điểm nào dưới đây?",
        "options": [
            "Ảnh trắng toàn bộ",
            "Ảnh đen toàn bộ",
            "Ảnh có một vài khối đen, một vài khối trắng",
            "Không có điểm gì quá đặc biệt, có các điểm ảnh có thể nhận giá trị đa dạng trong miền giá trị của nó."
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 110,
        "question": "Cho 2 histogram tương ứng của 2 ảnh như hình dưới, nhận định nào dưới đây là đúng?",
        "options": [
            "Độ sáng của ảnh I1 cao hơn độ sáng của ảnh I2.",
            "Độ sáng của ảnh I1 thấp hơn độ sáng của ảnh I2.",
            "Độ sáng của 2 ảnh tương tự nhau.",
            "Không so sánh được độ sáng của 2 ảnh này."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh9.png"]
    },
    {
        "id": 111,
        "question": "Cho ảnh đa mức xám 256 mức không nén, cần bao nhiêu bytes để lưu trữ mỗi điểm ảnh?",
        "options": [
            "1",
            "3",
            "8",
            "24"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 112,
        "question": "Trong không gian màu nào thành phần màu và độ sáng không được mã hóa tách biệt trong các kênh?",
        "options": [
            "RGB",
            "HSV",
            "Lab",
            "YCbCr"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 113,
        "question": "Cho 2 histogram tương ứng của 2 ảnh như hình dưới, nhận định nào dưới đây là đúng?",
        "options": [
            "Độ tương phản của ảnh I1 tốt hơn độ tương phản của ảnh I2.",
            "Độ tương phản của ảnh I2 tốt hơn độ tương phản của ảnh I1.",
            "Độ tương phản của ảnh I2 tương tự độ tương phản của ảnh I1.",
            "Không so sánh được độ tương phản của ảnh I1 và I2."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh9.png"]
    },
    {
        "id": 114,
        "question": "Nhận định nào dưới đây là đúng?",
        "options": [
            "Histogram của hai ảnh khác nhau có thể giống nhau.",
            "Histogram của hai ảnh khác nhau luôn khác nhau.",
            "Histogram của ảnh luôn có 256 mức (256 bins).",
            "Nếu các đối tượng trong ảnh dịch sang trái 10 điểm ảnh, histogram của ảnh cũng được dịch sang trái."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 115,
        "question": "Mục đích của cân bằng histogram là gì?",
        "options": [
            "Tăng cường độ tương phản của ảnh.",
            "Tăng độ sáng của ảnh.",
            "Biểu diễn nội dung của ảnh.",
            "Giảm nhiễu."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 116,
        "question": "Cho ảnh có đa mức xám 256 mức, cường độ sáng của điểm ảnh nhận giá trị trong khoảng nào?",
        "options": [
            "[0, 255]",
            "[0, 100]",
            "[0, 256]",
            "[1, 256]"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 117,
        "question": "Nếu chúng ta chụp ảnh cùng một đối tượng trong điều kiện chiếu sáng khác nhau và biểu diễn trong không gian màu Lab thì kênh màu nào có sự khác biệt lớn nhất giữa 2 ảnh?",
        "options": [
            "L",
            "a",
            "b",
            "a và b"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 118,
        "question": "Có bao nhiêu kênh trong ảnh RGB?",
        "options": [
            "3",
            "1",
            "8",
            "4"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 119,
        "question": "Mục đích của bộ phát hiện Canny?",
        "options": [
            "Phát hiện biên",
            "Trích chọn đặc trưng cục bộ",
            "Trích chọn đặc trưng toàn cục",
            "Loại bỏ nhiễu"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 120,
        "question": "Bộ phát hiện Canny sử dụng đạo hàm bậc mấy trên ảnh?",
        "options": [
            "Đạo hàm bậc nhất",
            "Đạo hàm bậc hai",
            "Cả đạo hàm bậc nhất và đạo hàm bậc hai",
            "Không sử dụng đạo hàm bậc 1 hay bậc 2."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 121,
        "question": "Cho ảnh gốc ở bên trái, bộ lọc nào đã được sử dụng để thu được ảnh kết quả ở bên phải?",
        "options": [
            "Bộ lọc Sobel",
            "Bộ lọc trung vị",
            "Bộ lọc Gauss",
            "Bộ lọc trung bình"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh11.png"]
    },
    {
        "id": 122,
        "question": "Cho một ma trận điểm ảnh (4x4) và một mặt nạ nhân chập, hãy cho biết giá trị của điểm ảnh (1,1) sau nhân chập?",
        "options": [
            "-60",
            "60",
            "22",
            "50"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh12.png"]
    },
    {
        "id": 123,
        "question": "Nhận định nào dưới đây về nhân chập 2D KHÔNG chính xác?",
        "options": [
            "Giá trị mới của điểm ảnh được tính bằng tổng có trọng số các giá trị điểm ảnh trong lân cận của nó.",
            "Cùng một hàm số được áp dụng lên tất cả các điểm ảnh.",
            "Nhân chập 2D có thể được dùng để loại nhiễu, tăng cường độ sắc nét của ảnh hoặc để phát hiện biên.",
            "Không đáp án nào trong số các đáp án được đề cập."
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 124,
        "question": "Mệnh đề nào sau đây là đúng?",
        "options": [
            "Mặt nạ Laplace có thể dùng để tính đạo hàm bậc 2 của ảnh.",
            "Mặt nạ Laplace có thể dùng để tính đạo hàm bậc 1 của ảnh.",
            "Đạo hàm bậc 2 của ảnh không thể được sấp xỉ bởi phép nhân chập.",
            "Không đáp án nào trong số các đáp án được đề cập."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 125,
        "question": "Điểm biên được xác định bằng cách nào?",
        "options": [
            "Tìm điểm đổi dấu (zero-crossing) trên đạo hàm bậc 2.",
            "Tìm cực trị địa phương trên đạo hàm bậc 1.",
            "Tìm điểm đổi dấu (zero-crossing) trên đạo hàm bậc 1.",
            "Tìm cực trị địa phương trên đạo hàm bậc 2."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 126,
        "question": "Nhận định nào về đặc trưng ảnh sau đây là đúng?",
        "options": [
            "Đặc trưng cục bộ mô tả nội dung một vùng nào đó trong ảnh.",
            "Đặc trưng cục bộ biểu diễn thông tin của toàn bộ bức ảnh.",
            "Histogram của ảnh là một đặc trưng cục bộ.",
            "Không đáp án nào trong số các đáp án được đề cập."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 127,
        "question": "Nhận định nào về đặc trưng ảnh sau đây là đúng?",
        "options": [
            "Đặc trưng toàn cục biểu diễn thông tin của toàn bộ bức ảnh.",
            "Đặc trưng cục bộ mô tả nội dung một vùng nào đó trong ảnh.",
            "SURF là một đặc trưng toàn cục.",
            "Không đáp án nào trong số các đáp án được đề cập."
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 128,
        "question": "Mặt nạ dưới đây dùng cho bộ lọc nào?",
        "options": [
            "Bộ lọc trung bình",
            "Bộ lọc trung vị",
            "Bộ lọc Gauss",
            "Bộ lọc tăng cường độ sắc nét của cạnh"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh13.png"]
    },
    {
        "id": 129,
        "question": "Mặt nạ dưới đây dùng cho bộ lọc nào?",
        "options": [
            "Bộ lọc trung bình",
            "Bộ lọc trung vị",
            "Bộ lọc Gauss",
            "Bộ lọc tăng cường độ sắc nét của cạnh"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh14.png"]
    },
    {
        "id": 130,
        "question": "Các vùng để tính đặc trưng cục bộ được xác định bằng cách nào?",
        "options": [
            "Sử dụng phương pháp phân vùng ảnh",
            "Chia ảnh thành các mảnh sử dụng lưới chia định nghĩa trước",
            "Phát hiện các điểm đặc trưng và xác định vùng cục bộ xung quanh điểm đặc trưng đó.",
            "Tất cả các phương án được đề cập."
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 131,
        "question": "Hai ảnh dưới đây là kết quả thu được khi áp dụng mặt nạ trung bình có kích thước khác nhau trên cùng một ảnh. Nếu ảnh bên trái là kết quả của bộ lọc 9×9 thì ảnh bên phải tương ứng của mặt nạ có kích thước nào?",
        "options": [
            "15×15",
            "9×9",
            "5×5",
            "3×3"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh15.png"]
    },
    {
        "id": 132,
        "question": "SIFT là gì?",
        "options": [
            "Đặc trưng cục bộ",
            "Đặc trưng toàn cục",
            "Phương pháp tăng cường độ tương phản",
            "Bộ phát hiện biên"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 133,
        "question": "Giả sử bạn dùng K-means để phân tích dữ liệu Facebook tìm nhóm người dùng đặc biệt. Khi tăng K, lỗi trên tập huấn luyện luôn giảm và khó chọn K tốt nhất. Bạn nên làm gì?",
        "options": [
            "Tìm một (hoặc vài) chuyên gia về lĩnh vực đó để đánh giá chất lượng của các nhóm/cụm tìm được",
            "Chọn K mà có lỗi phân cụm nhỏ nhất trên tập huấn luyện",
            "Chọn K mà có lỗi gần nhất với lỗi trung bình từ tất cả các thử nghiệm của bạn"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 134,
        "question": "Hold-out có phải là một phương pháp để tiền xử lý và hiểu dữ liệu?",
        "options": [
            "Không, nó là một chiến lược để đánh giá một mô hình",
            "Đúng, tất nhiên rồi",
            "Không, nó là một phương pháp để huấn luyện một mô hình từ một tập dữ liệu cho trước"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 135,
        "question": "Giả sử hệ thống phát hiện tấn công mạng đạt accuracy 99% trên tập kiểm thử nhưng sếp vẫn chê. Đâu có thể là lý do?",
        "options": [
            "Đánh giá của bạn về hệ thống đó có thể bị làm sai",
            "Độ chính xác có thể không phản ánh đúng mong muốn của sếp",
            "Sếp không có đủ tri thức để hiểu hệ thống đó và sự vất vả của bạn",
            "Tập huấn luyện có thể quá đơn giản.",
            "Bạn không may mắn"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 136,
        "question": "Đánh giá mô hình là",
        "options": [
            "Việc đánh giá hiệu quả (chất lượng) của một mô hình hoặc phương pháp phân tích dữ liệu, bằng cách sử dụng một hoặc nhiều tập dữ liệu",
            "Việc đánh giá hiệu quả (chất lượng) của một mô hình hoặc phương pháp phân tích dữ liệu, chỉ bằng cách sử dụng các kịch bản thực tế",
            "Việc chúng ta khám phá một mô hình đã được học để tìm ra tri thức mới"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 137,
        "question": "Huấn luyện mô hình đạt 99% trên tập huấn luyện nhưng chỉ 67% trên Kaggle. Cách nào sau đây có khả năng giúp cải thiện?",
        "options": [
            "Đặt hệ số hiệu chỉnh (nếu có) bằng 0",
            "Huấn luyện trên nhiều dữ liệu hơn",
            "Dùng bước tối ưu tham số",
            "Bỏ bớt dữ liệu một cách ngẫu nhiên khi huấn luyện"
        ],
        "correct": [1, 2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 138,
        "question": "Phát biểu nào sau đây là SAI?",
        "options": [
            "Đánh giá mô hình và lựa chọn mô hình trong Học máy là hai thứ độc lập với nhau",
            "Đánh giá mô hình thường yêu cầu thực hiện bước lựa chọn mô hình",
            "Lựa chọn mô hình là một bước bắt buộc khi muốn so sánh nhiều mô hình học máy khác nhau"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 139,
        "question": "Phát biểu nào sau đây phù hợp nhất về lựa chọn mô hình (model selection)?",
        "options": [
            "Lựa chọn mô hình quan tâm đến việc tìm thiết đặt tốt nhất về bộ (siêu) tham số trong một mô hình khi huấn luyện nó từ một tập dữ liệu. Đôi khi nó cũng nói đến việc lựa chọn một trong số các mô hình đang có.",
            "Lựa chọn mô hình chỉ quan tâm đến việc lựa chọn một mô hình tốt nhất từ một tập đang có.",
            "Các phát biểu khác đều sai."
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 140,
        "question": "Khi sử dụng một phương pháp phân tích dữ liệu, hai lần chạy khác nhau có thể thu được hai kết quả khác nhau mặc dù cùng thiết đặt tham số. Lý do có thể từ đâu?",
        "options": [
            "Do sự ngẫu nhiên khi chia tập dữ liệu thành hai tập con huấn luyện và kiểm chứng",
            "Do việc sử dụng các thiết đặt khác nhau cho các tham số",
            "Do việc sử dụng các tập dữ liệu khác nhau",
            "Do dùng phương pháp đó sai cách",
            "Do tính ngẫu nhiên của thuật toán học/phân tích"
        ],
        "correct": [0, 4],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 141,
        "question": "Khi khám phá dữ liệu, bạn phát hiện ra rằng Thuộc tính A tương quan mạnh với nhãn lớp. Tuy nhiên khi huấn luyện một mô hình học máy từ tập dữ liệu, A thường làm giảm đáng kể độ chính xác. Tại sao tình huống này có thể xảy ra?",
        "options": [
            "A là một thuộc tính nhiễu",
            "A có tương quan âm với nhãn lớp",
            "Đánh giá của bạn có thể chưa kỹ lưỡng",
            "A có thể phổ biến và không có tính tách biệt",
            "Tình huống này không thể xảy ra"
        ],
        "correct": [2, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 142,
        "question": "Khi khám phá dữ liệu, bạn phát hiện ra rằng Thuộc tính A tương quan mạnh với nhãn lớp. Tuy nhiên khi huấn luyện một mô hình học máy từ tập dữ liệu, A thường làm giảm đáng kể độ chính xác. Tại sao tình huống này có thể xảy ra?",
        "options": [
            "A là một thuộc tính nhiễu",
            "A có tương quan âm với nhãn lớp",
            "Cách bạn đo độ tương quan có thể chưa mô tả đúng sự phụ thuộc ẩn giữa A và nhãn lớp",
            "A có thể cung cấp thêm tri thức cho mô hình",
            "A có thể phổ biến cho tất cả các nhãn lớp",
            "Tình huống này không thể xảy ra"
        ],
        "correct": [3, 4],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 143,
        "question": "3 tầng kiến trúc của ...... là backend, artist, và scripting.",
        "options": [
            "Seaborn",
            "Pyplot",
            "Matlab",
            "Matplotlib"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 144,
        "question": "Bạn sẽ làm gì khi muốn phân tích và khám phá dữ liệu?",
        "options": [
            "Thống kê các thông số của dữ liệu (min, max, avg, std,...)",
            "Tính toán tần suất xuất hiện của các giá trị dữ liệu",
            "Vẽ biểu đồ histogram của dữ liệu",
            "Tất cả các đáp án khác đều đúng"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 145,
        "question": "Chỉ ra phát biểu đúng về biểu đồ scatter plot.",
        "options": [
            "Tập hợp các điểm được vẽ theo cả hai chiều thẳng đứng và nằm ngang",
            "Tập hợp các điểm được vẽ ngẫu nhiên trong hệ trục toạ độ",
            "Tập hợp các điểm nằm tập trung quanh một đường thẳng",
            "Không phát biểu nào đúng"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 146,
        "question": "Chỉ ra phát biểu đúng về hình sau:",
        "options": [
            "Biểu đồ cột về dữ liệu chiều cao của cây",
            "Histogram về dữ liệu chiều cao của cây",
            "Đồ thị hiển thị dữ liệu về số lượng cây",
            "Đồ thị hiển thị dữ liệu về chiều cao của cây"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": "",
        "image": ["images/anh16.png"]
    },
    {
        "id": 147,
        "question": "Khi phân tích histogram của dữ liệu, chúng ta muốn tìm kiếm những thông tin gì về dữ liệu?",
        "options": [
            "Correlation",
            "Asymmetry",
            "Statistical information",
            "Outliers"
        ],
        "correct": [1, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 148,
        "question": "Loại biểu đồ nào sau đây giúp biểu diễn trực quan dữ liệu dạng phân cấp tốt nhất?",
        "options": [
            "Treemap",
            "Population pyramid",
            "Bar chart",
            "Các lựa chọn khác là sai"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 149,
        "question": "Loại biểu đồ nào thích hợp khi chúng ta muốn theo dõi sự thay đổi theo thời gian?",
        "options": [
            "Line graph",
            "Column Graph",
            "Bar Graph",
            "Tất cả các lựa chọn khác"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 150,
        "question": "Loại công cụ trực quan hoá nào sẽ được sử dụng để biểu diễn độ phức tạp mã nguồn phần mềm?",
        "options": [
            "Trực quan hoá khoa học",
            "Trực quan hoá toán học",
            "Trực quan hoá thông tin"
        ],
        "correct": [2],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 151,
        "question": "Loại đồ thị nào ít nhập nhằng nhất và thường là lựa chọn tốt nhất để bắt đầu khám phá dữ liệu?",
        "options": [
            "Table chart",
            "Pie Chart",
            "Radial column chart",
            "Bar chart"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 152,
        "question": "Một phiên bản của scatter plot cho phép hiển thị dữ liệu 3 chiều?",
        "options": [
            "A heatmap",
            "A scatter map",
            "A bubble plot",
            "Các lựa chọn khác là sai"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 153,
        "question": "Một đối tượng cho phép giải thích cho các biểu tượng, màu sắc và các hình dạng mẫu được sử dụng trong các biểu đồ gọi là gì?",
        "options": [
            "Legend",
            "Chart title",
            "Axis title",
            "Data label"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 154,
        "question": "Nhiệt độ thuộc loại dữ liệu nào trong các loại sau đây?",
        "options": [
            "Dữ liệu rời rạc không sắp xếp",
            "Dữ liệu liên tục sắp xếp được",
            "Dữ liệu rời rạc sắp xếp được",
            "Dữ liệu liên tục không sắp xếp được"
        ],
        "correct": [1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 155,
        "question": "Những đặc trưng nào về dữ liệu có thể được trực quan hoá trong các biểu đồ scatterplot?",
        "options": [
            "Correlation",
            "Associations",
            "Skewness",
            "Dispersion"
        ],
        "correct": [0, 1],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 156,
        "question": "Phát biểu nào đúng nhất về pie chart?",
        "options": [
            "Pie chart được dùng khi chúng ta muốn thể hiện sự kết hợp của các thành phần khác nhau trong dữ liệu",
            "Pie chart là 1 đồ thị hình tròn được chia thành các mảng khác nhau, mỗi mảng biểu hiện sự thay đổi theo thời gian",
            "Pie chart được sử dụng khi muốn so sánh các hạng mục dữ liệu",
            "Các phát biểu khác là sai"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 157,
        "question": "Thông tin nào chúng ta có thể rút ra khi quan sát biểu đồ box plot?",
        "options": [
            "Lower/upper quartile",
            "Gap",
            "Probability distribution",
            "Skewness"
        ],
        "correct": [0, 3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 158,
        "question": "Thư viện nào cần được sử dụng nếu muốn trực quan hoá dữ liệu với Python?",
        "options": [
            "Numpy",
            "Pandas",
            "Seaborn",
            "Pyplot, pandas, seaborn"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 159,
        "question": "Thư viện nào của Python thường được sử dụng để trực quan hoá dữ liệu?",
        "options": [
            "NLTK, Spacy, …",
            "Requests, Scrapy, BeautifulSoup, …",
            "Tensorflow, Keras, scikit-learn, …",
            "SciPy, NumPy, Matplotlib and Pandas, …"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 160,
        "question": "Trong các phát biểu sau, đâu là phát biểu đúng nhất về việc lựa chọn kĩ thuật trực quan hoá phù hợp cho một loại dữ liệu?",
        "options": [
            "Thu thập dữ liệu, Tổ chức dữ liệu và phân tích dữ liệu",
            "Sử dụng biểu đồ cột phù hợp cho tất cả các loại dữ liệu",
            "Tạo ra các câu hỏi từ một kĩ thuật trực quan hoá dữ liệu",
            "Tất cả các phát biểu khác đều đúng"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 161,
        "question": "Đâu là kết hợp đúng nhất về hàm (function) và tham số (parameter) để tạo ra 1 biểu đồ box plot trong Matplotlib?",
        "options": [
            "Function = plot, and Parameter = type with value = “box”",
            "Function = boxplot, and Parameter = type with value = “plot”",
            "Function = plot and Parameter = kind with value = “box”",
            "Function = plot and Parameter = kind with value = “boxplot”"
        ],
        "correct": [0],
        "type": "multiple",
        "explanation": ""
    },
    {
        "id": 162,
        "question": "Đoạn code sau đây thể hiện đồ thị nào? question.plot(kind=’barh’)",
        "options": [
            "Line graph",
            "Column Graph",
            "Bar Graph",
            "Các lựa chọn khác là sai"
        ],
        "correct": [3],
        "type": "multiple",
        "explanation": ""
    }
];

let quizData = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let selectedAnswers = [];
let shuffleEnabled = true; // Mặc định bật xáo trộn
let isAnswerSubmitted = false; // Theo dõi trạng thái đã submit đáp án

// Hàm xáo trộn mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Hàm xáo trộn câu hỏi và đáp án
function shuffleQuizData() {
    // Tạo bản sao sâu của dữ liệu gốc
    const shuffledData = JSON.parse(JSON.stringify(originalQuizData));

    // Xáo trộn thứ tự câu hỏi nếu được bật
    if (shuffleEnabled) {
        const shuffledQuestions = shuffleArray(shuffledData);

        // Xáo trộn thứ tự đáp án cho mỗi câu hỏi
        return shuffledQuestions.map(question => {
            const originalOptions = [...question.options];
            const originalCorrect = [...question.correct];

            // Tạo mảng chỉ số và xáo trộn
            const indices = Array.from({ length: originalOptions.length }, (_, i) => i);
            const shuffledIndices = shuffleArray(indices);

            // Áp dụng thứ tự mới cho options
            const shuffledOptions = shuffledIndices.map(index => originalOptions[index]);

            // Cập nhật lại chỉ số đáp án đúng
            const shuffledCorrect = originalCorrect.map(correctIndex => {
                return shuffledIndices.indexOf(correctIndex);
            });

            return {
                ...question,
                options: shuffledOptions,
                correct: shuffledCorrect
            };
        });
    } else {
        return shuffledData;
    }
}

// Khởi tạo quiz
function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswers = [];
    isAnswerSubmitted = false;

    // Xáo trộn dữ liệu quiz
    quizData = shuffleQuizData();

    document.getElementById('total-questions').textContent = quizData.length;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';

    // Thêm nút điều khiển xáo trộn
    addShuffleControls();

    loadQuestion();
}

// Thêm điều khiển xáo trộn vào giao diện
function addShuffleControls() {
    const header = document.querySelector('header');

    // Kiểm tra xem đã có điều khiển chưa
    if (!document.getElementById('shuffle-controls')) {
        const shuffleControls = document.createElement('div');
        shuffleControls.id = 'shuffle-controls';
        shuffleControls.style.cssText = `
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        `;

        shuffleControls.innerHTML = `
            <label style="display: flex; align-items: center; gap: 0.5rem; color: white; font-size: 1rem;">
                <input type="checkbox" id="shuffle-checkbox" ${shuffleEnabled ? 'checked' : ''} 
                       onchange="toggleShuffle()" style="width: 18px; height: 18px;">
                🔀 Xáo trộn câu hỏi
            </label>
            <button onclick="reshuffleQuiz()" style="
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 0.5rem 1rem;
                border-radius: 5px;
                cursor: pointer;
                font-size: 0.9rem;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" 
               onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                🔄 Xáo trộn lại
            </button>
        `;

        header.appendChild(shuffleControls);
    }
}

// Bật/tắt xáo trộn
function toggleShuffle() {
    shuffleEnabled = document.getElementById('shuffle-checkbox').checked;
    localStorage.setItem('shuffleEnabled', shuffleEnabled);
}

// Xáo trộn lại quiz
function reshuffleQuiz() {
    if (confirm('Bạn có chắc muốn xáo trộn lại quiz? Tiến độ hiện tại sẽ bị mất.')) {
        initQuiz();
    }
}

// Tải câu hỏi hiện tại
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    const imageElement = document.getElementById('question-image');
    const imgElement = document.getElementById('question-img');
    const nextBtn = document.getElementById('next-btn');

    // Reset trạng thái
    selectedAnswers = [];
    isAnswerSubmitted = false;
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestionIndex === quizData.length - 1 ? 'Xem kết quả' : 'Câu tiếp theo';

    // Hiển thị số câu hỏi
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;

    // Cập nhật progress bar
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    document.getElementById('progress').style.width = progress + '%';

    // Hiển thị câu hỏi
    questionElement.textContent = currentQuestion.question;

    // Hiển thị hình ảnh nếu có
    if (currentQuestion.image) {
        imgElement.src = currentQuestion.image;
        imageElement.style.display = 'block';
    } else {
        imageElement.style.display = 'none';
    }

    // Tạo các lựa chọn
    answersElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = 'answer-option';
        answerDiv.onclick = () => selectAnswer(index);

        const inputType = currentQuestion.type === 'single' ? 'radio' : 'checkbox';
        const inputName = currentQuestion.type === 'single' ? 'answer' : `answer_${index}`;

        answerDiv.innerHTML = `
            <input type="${inputType}" name="${inputName}" id="option_${index}" value="${index}">
            <label for="option_${index}">${option}</label>
        `;

        answersElement.appendChild(answerDiv);
    });

    // Thêm nút submit đáp án cho multiple choice
    if (currentQuestion.type === 'multiple') {
        const submitDiv = document.createElement('div');
        submitDiv.style.cssText = 'text-align: center; margin-top: 1rem;';
        submitDiv.innerHTML = `
            <button class="btn btn-secondary" id="submit-answer-btn" onclick="submitAnswer()" disabled>
                ✅ Xác nhận đáp án
            </button>
        `;
        answersElement.appendChild(submitDiv);
    }
}

// Xử lý chọn đáp án
function selectAnswer(index) {
    if (isAnswerSubmitted) return; // Không cho phép thay đổi sau khi đã submit

    const currentQuestion = quizData[currentQuestionIndex];
    const answerOptions = document.querySelectorAll('.answer-option');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-answer-btn');

    if (currentQuestion.type === 'single') {
        // Bỏ chọn tất cả
        answerOptions.forEach(option => option.classList.remove('selected'));
        document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);

        // Chọn đáp án hiện tại
        answerOptions[index].classList.add('selected');
        document.getElementById(`option_${index}`).checked = true;
        selectedAnswers = [index];

        // Tự động submit cho single choice
        setTimeout(() => {
            submitAnswer();
        }, 500);

    } else {
        // Multiple choice
        const checkbox = document.getElementById(`option_${index}`);

        if (checkbox.checked) {
            // Bỏ chọn
            answerOptions[index].classList.remove('selected');
            checkbox.checked = false;
            selectedAnswers = selectedAnswers.filter(ans => ans !== index);
        } else {
            // Chọn
            answerOptions[index].classList.add('selected');
            checkbox.checked = true;
            selectedAnswers.push(index);
        }

        // Enable submit button nếu có đáp án được chọn
        if (submitBtn) {
            submitBtn.disabled = selectedAnswers.length === 0;
        }
    }
}

// Submit đáp án và hiển thị kết quả
function submitAnswer() {
    if (isAnswerSubmitted) return;

    const currentQuestion = quizData[currentQuestionIndex];
    const answerOptions = document.querySelectorAll('.answer-option');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-answer-btn');

    isAnswerSubmitted = true;

    // Lưu đáp án của user
    userAnswers.push([...selectedAnswers]);

    // Kiểm tra đáp án đúng
    const isCorrect = arraysEqual(selectedAnswers.sort(), currentQuestion.correct.sort());
    if (isCorrect) {
        score++;
    }

    // Hiển thị kết quả
    answerOptions.forEach((option, index) => {
        option.onclick = null; // Vô hiệu hóa click

        if (currentQuestion.correct.includes(index)) {
            option.classList.add('correct');
            option.innerHTML += ' <span style="float: right; color: #4caf50; font-weight: bold;">✅</span>';
        } else if (selectedAnswers.includes(index)) {
            option.classList.add('incorrect');
            option.innerHTML += ' <span style="float: right; color: #f44336; font-weight: bold;">❌</span>';
        }
    });

    // Hiển thị thông báo kết quả
    showAnswerFeedback(isCorrect);

    // Enable next button
    nextBtn.disabled = false;

    // Ẩn submit button
    if (submitBtn) {
        submitBtn.style.display = 'none';
    }
}

// Hiển thị phản hồi về đáp án
function showAnswerFeedback(isCorrect) {
    const answersElement = document.getElementById('answers');

    // Xóa feedback cũ nếu có
    const existingFeedback = document.getElementById('answer-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedbackDiv = document.createElement('div');
    feedbackDiv.id = 'answer-feedback';
    feedbackDiv.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 10px;
        text-align: center;
        font-weight: bold;
        font-size: 1.1rem;
        animation: fadeIn 0.5s ease-in;
        display: none;
        ${isCorrect ?
            'background: #e8f5e8; border: 2px solid #4caf50; color: #2e7d32;' :
            'background: #ffebee; border: 2px solid #f44336; color: #c62828;'
        }
    `;

    const currentQuestion = quizData[currentQuestionIndex];
    const correctAnswers = currentQuestion.correct.map(idx => currentQuestion.options[idx]).join(', ');

    feedbackDiv.innerHTML = `
        <div style="font-size: 1.3rem; margin-bottom: 0.5rem;">
            ${isCorrect ? '🎉 Chính xác!' : '😔 Chưa đúng!'}
        </div>
        <div style="font-size: 0.9rem; opacity: 0.8;">
            Điểm hiện tại: ${score}/${currentQuestionIndex + 1}
        </div>
        ${!isCorrect ? `<div style="font-size: 0.9rem; margin-top: 0.5rem;">Đáp án đúng: ${correctAnswers}</div>` : ''}
    `;

    answersElement.appendChild(feedbackDiv);
}

// Chuyển câu hỏi tiếp theo
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

// Hiển thị kết quả cuối cùng
function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';

    // Cập nhật progress bar
    document.getElementById('progress').style.width = '100%';

    const percentage = Math.round((score / quizData.length) * 100);
    document.getElementById('final-score').textContent = `${score}/${quizData.length} (${percentage}%)`;

    // Hiển thị chi tiết kết quả
    const resultDetails = document.getElementById('result-details');
    let detailsHTML = '<h3>Chi tiết kết quả:</h3>';

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = arraysEqual(userAnswer.sort(), question.correct.sort());

        // Hiển thị đáp án đúng
        const correctAnswers = question.correct.map(idx => question.options[idx]).join(', ');
        const userAnswerText = userAnswer.map(idx => question.options[idx]).join(', ') || 'Không trả lời';

        detailsHTML += `
            <div class="result-item" style="flex-direction: column; align-items: flex-start; gap: 0.5rem;">
                <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
                    <span><strong>Câu ${index + 1}:</strong> ${question.question}</span>
                    <span class="${isCorrect ? 'correct' : 'incorrect'}" style="color: ${isCorrect ? '#4caf50' : '#f44336'};">
                        ${isCorrect ? '✅ Đúng' : '❌ Sai'}
                    </span>
                </div>
                <div style="font-size: 0.9rem; color: #666;">
                    <div><strong>Bạn chọn:</strong> ${userAnswerText}</div>
                    <div><strong>Đáp án đúng:</strong> ${correctAnswers}</div>
                </div>
            </div>
        `;
    });

    resultDetails.innerHTML = detailsHTML;
}

// Khởi động lại quiz
function restartQuiz() {
    initQuiz();
}

// Hàm tiện ích so sánh mảng
function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Lưu và khôi phục cài đặt xáo trộn
function loadSettings() {
    const savedShuffle = localStorage.getItem('shuffleEnabled');
    if (savedShuffle !== null) {
        shuffleEnabled = savedShuffle === 'true';
    }
}

// Khởi tạo quiz khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    initQuiz();
});

// Thêm phím tắt
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !document.getElementById('next-btn').disabled) {
        nextQuestion();
    }

    // Phím số để chọn đáp án nhanh (chỉ khi chưa submit)
    if (!isAnswerSubmitted && e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key) - 1;
        const answerOptions = document.querySelectorAll('.answer-option');
        if (answerOptions[index]) {
            selectAnswer(index);
        }
    }

    // Phím Space để submit đáp án multiple choice
    if (e.key === ' ' && !isAnswerSubmitted) {
        const submitBtn = document.getElementById('submit-answer-btn');
        if (submitBtn && !submitBtn.disabled) {
            e.preventDefault();
            submitAnswer();
        }
    }
});

// Thêm CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);