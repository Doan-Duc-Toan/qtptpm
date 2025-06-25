const questions = [
    {
        id: 1,
        question: "Quản lý dự án có các lĩnh vực nào? (Nhiều đáp án đúng)",
        options: [
            "Quản lý hợp nhất",
            "Quản lý phạm vi",
            "Quản lý thời gian",
            "Quản lý chi phí"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Theo PMBOK, quản lý dự án có 10 lĩnh vực kiến thức (Knowledge Areas) chính, bao gồm tất cả các lĩnh vực được liệt kê và thêm quản lý chất lượng, nguồn nhân lực, giao tiếp, rủi ro, mua sắm, stakeholder."
    },
    {
        id: 2,
        question: "Yếu tố điểm mạnh trong dự án là gì? (Nhiều đáp án đúng)",
        options: [
            "Những việc doanh nghiệp bạn làm tốt",
            "Những tố chất khiến bạn nổi bật hơn đối thủ",
            "Nguồn lực nội bộ như kỹ năng nghề nghiệp, kiến thức chuyên môn",
            "Các tài sản hữu hình như máy móc, thiết bị tiên tiến",
            "Các tài sản vô hình như kỹ thuật độc quyền, bằng phát minh, sáng chế"
        ],
        correct: [0, 1, 2, 3, 4],
        type: "multiple",
        explanation: "Trong SWOT analysis, Strengths (điểm mạnh) bao gồm tất cả các yếu tố nội bộ tích cực: năng lực, tài sản hữu hình và vô hình, competitive advantages."
    },
    {
        id: 3,
        question: "Mô hình (Đầu vào – Công cụ và Kỹ thuật – Đầu ra) có đặc điểm gì? (Nhiều đáp án đúng)",
        options: [
            "Đầu vào là danh sách các hành động",
            "Công cụ và kỹ thuật để quyết định chuyên môn dựa trên việc ước lượng và phân tích",
            "Đầu ra là thời lượng hành động",
            "Phạm vi yêu cầu được xác định trong quá trình cập nhật tài liệu ở đầu ra"
        ],
        correct: [0, 1, 2],
        type: "multiple",
        explanation: "ITTO framework: Tools & Techniques bao gồm expert judgment và analysis. Outputs thường bao gồm document updates mà scope requirements có thể được refined."
    },
    {
        id: 4,
        question: "Triển khai dự án bao gồm những hoạt động nào? (Nhiều đáp án đúng)",
        options: [
            "Thực hiện hoàn thành các công việc",
            "Mục đích đảm bảo các yêu cầu của dự án",
            "Cần có việc giám sát và kiểm soát trong quá trình triển khai",
            "Triển khai dự án cần rà soát và điều chỉnh lại tiến độ"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Giai đoạn triển khai (Execution) bao gồm tất cả các hoạt động: thực hiện công việc, đảm bảo requirements, giám sát kiểm soát, và điều chỉnh tiến độ khi cần."
    },
    {
        id: 5,
        question: "Khẳng định nào sau đây là đúng về chương trình (programme)? (Nhiều đáp án đúng)",
        options: [
            "Chương trình (programme) là một nhóm các dự án",
            "Các thành phần trong chương trình được quản lý theo cách phối hợp để thu được lợi ích lớn nhất",
            "Việc quản lý các thành phần trong chương trình có thể thực hiện riêng lẻ tùy theo phạm vi của chương trình",
            "Lợi ích và vấn đề kiểm soát là các vấn đề quan trọng đối với một chương trình"
        ],
        correct: [0, 1, 3],
        type: "multiple",
        explanation: "A, B, D đúng. Programme là nhóm dự án được quản lý phối hợp để đạt lợi ích tối đa. C sai vì nếu quản lý riêng lẻ thì mất ý nghĩa của programme."
    },
    {
        id: 6,
        question: "Yếu tố điểm yếu trong dự án là gì? (Nhiều đáp án đúng)",
        options: [
            "Những khía cạnh hay chuyên môn doanh nghiệp làm chưa tốt",
            "Những việc đối thủ làm tốt hơn bạn",
            "Những nguồn lực bị giới hạn so với đối thủ",
            "Những yếu điểm trong nội bộ",
            "Những điểm cần cải thiện của đội ngũ",
            "Những điều khoản hợp đồng mua bán chưa rõ ràng"
        ],
        correct: [0, 1, 2, 3, 4, 5],
        type: "multiple",
        explanation: "Tất cả đều đúng. Weaknesses là internal factors. B là external factor về competitors, thuộc về Threats chứ không phải Weaknesses."
    },
    {
        id: 7,
        question: "Lập kế hoạch dự án bao gồm những việc gì? (Nhiều đáp án đúng)",
        options: [
            "Thiết lập phạm vi công việc của dự án",
            "Cần xác định yêu cầu dự án",
            "Điều chỉnh mục tiêu của dự án",
            "Xác định đường đi tới mục tiêu của dự án"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Planning phase bao gồm tất cả: thiết lập scope, xác định requirements, điều chỉnh objectives, và xác định approach để đạt mục tiêu."
    },
    {
        id: 8,
        question: "Khách hàng kí hợp đồng với công ty TCIOS để viết phần mềm tính tích phân. Khi dự án tiến hành được 80%, khách hàng yêu cầu TCIOS phải bổ sung thêm các báo cáo chi tiết về các lần kiểm thử, mô tả lỗi và cách giải quyết. Sự kiện này nghĩa là gì? (Nhiều đáp án đúng)",
        options: [
            "Khách hàng đã thay đổi phạm vi quản lý dự án",
            "Khách hàng đã thay đổi phạm vi sản phẩm"
        ],
        correct: [0],
        type: "multiple",
        explanation: "Yêu cầu thêm báo cáo, documentation thuộc về project management activities, không phải thay đổi sản phẩm phần mềm."
    },
    {
        id: 9,
        question: "Không dừng lại, khách hàng lại yêu cầu TCIOS làm cho sản phẩm chạy đa nền tảng. Sự kiện này nghĩa là gì? (Nhiều đáp án đúng)",
        options: [
            "Khách hàng đã thay đổi phạm vi quản lý dự án",
            "Khách hàng đã thay đổi phạm vi sản phẩm"
        ],
        correct: [0, 1],
        type: "multiple",
        explanation: "Yêu cầu chạy đa nền tảng là thay đổi technical requirements của sản phẩm, đồng thời cũng ảnh hưởng đến phạm vi quản lý dự án."
    },
    {
        id: 10,
        question: "Các dự án khác nhau có thể vì lý do nào? (Nhiều đáp án đúng)",
        options: [
            "Người thực hiện mới",
            "Thời gian bắt đầu và kết thúc khác nhau",
            "Có mục đích và hoạt động khác nhau",
            "Có sản phẩm mới"
        ],
        correct: [0, 2, 3],
        type: "multiple",
        explanation: "A, C, D đúng. Mỗi dự án là unique với team, objectives, activities và deliverables riêng biệt. Timeline khác nhau không phải lý do làm dự án khác nhau."
    },
    {
        id: 11,
        question: "Công ty TCIOS triển khai hệ thống fail-over để sẵn sàng chuyển sang hệ thống dự phòng khi có sự cố. Đây là kỹ thuật đối phó rủi ro nào?",
        options: [
            "Transfer / Chuyển",
            "Accept / Chấp nhận",
            "Mitigate / Giảm",
            "Avoid / Tránh"
        ],
        correct: 2,
        type: "single",
        explanation: "Triển khai hệ thống fail-over là kỹ thuật Mitigate - giảm thiểu tác động của rủi ro khi nó xảy ra, không phải tránh hoặc chuyển rủi ro."
    },
    {
        id: 12,
        question: "Trong 5 giai đoạn của quản lý dự án theo PMBOK, giai đoạn nào thường tiêu tốn nhiều ngân sách nhất?",
        options: [
            "Initiation – Khởi tạo dự án",
            "Closing – Đóng",
            "Planning – Lập kế hoạch",
            "Executing – Thực hiện",
            "Monitoring and Controlling – Giám sát và Điều khiển"
        ],
        correct: 3,
        type: "single",
        explanation: "Execution phase có chi phí cao nhất vì đây là giai đoạn thực sự triển khai công việc, team hoạt động full capacity, sử dụng resources nhiều nhất."
    },
    {
        id: 13,
        question: "Các nhân tố được vận dụng trong quản lý là gì? (Nhiều đáp án đúng)",
        options: [
            "Là chân lý và kết quả thông qua kinh nghiệm và học tập",
            "Được đo lường kĩ năng bằng hành động",
            "Là tài năng dựa trên bản năng và hành vi",
            "Giúp nhận biết các rủi ro để có cách hành xử phù hợp"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Management factors bao gồm knowledge (kinh nghiệm/học tập), skills (đo lường qua hành động), talents (bản năng/hành vi), và risk awareness."
    },
    {
        id: 14,
        question: "Xác định các tác nhân và tổ chức ảnh hưởng có đặc điểm gì? (Nhiều đáp án đúng)",
        options: [
            "Cần đầu vào là tuyên ngôn dự án",
            "Việc phân tích các tổ chức hoặc cá nhân có thể được thực hiện bởi các công cụ hoặc các chuyên gia",
            "Đầu ra là chiến lược quản lý các đối tượng có ảnh hưởng đến dự án",
            "Các nhân tố ảnh hưởng đến dự án sẽ quyết định đến việc xây dựng đội ngũ dự án"
        ],
        correct: [0, 1, 2],
        type: "multiple",
        explanation: "A, B, C đúng. Stakeholder identification bắt đầu từ project charter, sử dụng tools và expert judgment, tạo ra engagement strategies. D không có evidence rõ ràng."
    },

    {
        id: 15,
        question: "Quản lý dự án giúp cho việc gì? (Nhiều đáp án đúng)",
        options: [
            "Xây dựng một nhóm thực hiện và một đội thực hiện dự án",
            "Xác định và đánh giá yêu cầu",
            "Xây dựng các cấu trúc phân chia công việc",
            "Lập dự toán dự án và tiến độ dự án",
            "Tạo ra kế hoạch dự án",
            "Quản lý kiểm soát thay đổi của dự án",
            "Hoàn thành dự án với chiến lược chặt chẽ"
        ],
        correct: [0, 1, 2, 3, 4, 5, 6],
        type: "multiple",
        explanation: "Tất cả đều đúng. Quản lý dự án là quy trình toàn diện bao gồm tất cả các hoạt động từ team building, requirements, WBS, estimation, planning, change control đến project closure."
    },
    {
        id: 16,
        question: "Tại sao ước lượng dự án ở giai đoạn System Design có độ chính xác cao nhưng ít ảnh hưởng tới kinh phí toàn bộ dự án?",
        options: [
            "Vì cần nhiều nguồn lực để thực hiện, nên thường xảy ra khi hợp đồng dự án đã được thực hiện, giá trị hợp đồng đã xác định",
            "Vì nhằm tính toán các công việc kỹ thuật, không phải tính kinh phí dự án",
            "Vì người thực hiện là các lập trình viên, không phải người có chuyên môn về kinh tế"
        ],
        correct: 0,
        type: "single",
        explanation: "Đúng. Khi đến System Design, hợp đồng đã được ký kết dựa trên ước lượng từ các giai đoạn đầu. Các budget decisions chính đã được establish ở các giai đoạn trước."
    },
    {
        id: 17,
        question: "Phát biểu nào là đúng về người lãnh đạo và người quản lý? (Nhiều đáp án đúng)",
        options: [
            "Người lãnh đạo hướng về tương lai còn người quản lý hướng về hiện tại",
            "Người lãnh đạo chú trọng đến tầm nhìn còn người quản lý chú trọng về phần hỗ trợ",
            "Lãnh đạo là sáng tạo, truyền cảm hứng còn quản lý là phân tích và gỡ rối",
            "Lãnh đạo cần tư duy có cấu trúc, quản lý cần có tư duy tiến bộ"
        ],
        correct: [0, 1, 2],
        type: "multiple",
        explanation: "A, B, C đúng. Leaders focus on future orientation, vision, innovation/inspiration, còn managers focus on present operations, support và analysis/problem-solving."
    },
    {
        id: 18,
        question: "Kỹ năng lãnh đạo là gì? (Nhiều đáp án đúng)",
        options: [
            "Đưa ra mục tiêu và tập hợp các cá nhân để hoàn thành mục tiêu đó",
            "Tìm ra những nhân tố đặc thù",
            "Định hướng về tương lai",
            "Hợp nhất các thành viên"
        ],
        correct: [0, 2, 3],
        type: "multiple",
        explanation: "A, C, D đúng. Leadership skills bao gồm vision setting & team mobilization, future orientation, và unity building. B không phải core leadership skill trong standard framework."
    },
    {
        id: 19,
        question: "Khởi tạo dự án bao gồm những hoạt động nào? (Nhiều đáp án đúng)",
        options: [
            "Thực hiện việc định nghĩa một dự án mới hoặc một phát sinh mới của một dự án có sẵn",
            "Cần xác định yêu cầu dự án",
            "Cần xác định mức độ ưu tiên của dự án",
            "Phân tích các yêu cầu đầu tư",
            "Phân công trách nhiệm cho các bộ phận thực hiện"
        ],
        correct: [0, 1, 3, 4],
        type: "multiple",
        explanation: "A, B, D, E đúng. Project initiation bao gồm defining project, requirements identification, investment analysis, và responsibility assignment. C không phải core component của initiation."
    },
    {
        id: 20,
        question: "Người quản lý dự án cần làm gì? (Nhiều đáp án đúng)",
        options: [
            "Giữ đúng kế hoạch",
            "Bắt buộc hoàn thành sản phẩm trong phạm vi ngân sách",
            "Đáp ứng yêu cầu của khách hàng",
            "Tập trung vào chất lượng của sản phẩm",
            "Chú trọng đến kết quả kinh doanh sản phẩm"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "A, B, C, D đúng. PM chịu trách nhiệm về project delivery constraints và quality. E sai vì business performance của sản phẩm không phải trách nhiệm của PM."
    },
    {
        id: 21,
        question: "Yếu tố nguy cơ trong dự án là gì? (Nhiều đáp án đúng)",
        options: [
            "Có những đối thủ mạnh, đối thủ mới nổi",
            "Nhu cầu mới nổi cho sản phẩm hoặc dịch vụ nhưng không nắm bắt",
            "Nguồn lực hữu hạn khó đảm bảo thực thi dự án",
            "Nguy cơ thiếu vốn",
            "Khả năng chấp nhận sản phẩm của dự án trong thị trường",
            "Khả năng về trình độ kỹ thuật, khoa học công nghệ để đảm bảo chất lượng của sản phẩm",
            "Sản phẩm có thể lỗi thời trước khi ra thị trường"
        ],
        correct: [0, 1, 2, 3, 4, 5, 6],
        type: "multiple",
        explanation: "Tất cả đều đúng. Threats trong SWOT analysis bao gồm tất cả external factors có thể gây hại cho dự án: competitors, market changes, resource constraints, technology risks."
    },
    {
        id: 22,
        question: "Khẳng định nào sau đây là SAI?",
        options: [
            "Chương trình (programme) và dự án thường hướng đến một mục đích chính nào đó",
            "Chương trình thường tạo ra một kết quả đầu ra và sau đó sẽ kết thúc",
            "Chương trình có phạm vi thường lớn hơn và phức tạp các dự án thành phần",
            "Các dự án trong một chương trình cần yêu cầu sự phối hợp rộng rãi"
        ],
        correct: 1,
        type: "single",
        explanation: "B sai. Chương trình không chỉ tạo ra một output rồi kết thúc, mà tập trung vào long-term benefits và strategic outcomes, có thể chạy liên tục."
    },
    {
        id: 23,
        question: "Tiểu dự án và dự án có những đặc điểm nào? (Nhiều đáp án đúng)",
        options: [
            "Đều có mục tiêu và kết quả đầu ra",
            "Đều có phạm vi, nguồn nhân lực",
            "Đều có lịch trình, chi phí",
            "Ước lượng rủi ro sẽ được thực hiện ở tiểu dự án, phân tích rủi ro sẽ được thực hiện ở dự án"
        ],
        correct: [0, 1, 2],
        type: "multiple",
        explanation: "A, B, C đúng. Cả sub-project và project đều có objectives, scope, resources, schedule, cost. D không rõ ràng về phân biệt risk activities."
    },
    {
        id: 24,
        question: "Trong số các cách đặt mục tiêu học tập sau, cách viết nào hiệu quả?",
        options: [
            "Cố gắng chăm chỉ hơn nữa",
            "Mỗi học kỳ không bị nợ quá 2 môn",
            "Nâng cao hiểu biết, học tập sâu rộng ở nhiều lĩnh vực",
            "Dành thời gian học càng nhiều càng tốt"
        ],
        correct: 1,
        type: "single",
        explanation: "B đúng vì là mục tiêu SMART: Specific (cụ thể - không nợ quá 2 môn), Measurable (đo lường được), Achievable (khả thi), Relevant (liên quan), Time-bound (có thời hạn - mỗi học kỳ)."
    },
    {
        id: 25,
        question: "Nếu bị điểm kém ở môn học này, bạn nghĩ nguyên nhân là do đâu?",
        options: [
            "Cũng phải, Minh chểnh mảng, học không cẩn thận môn này",
            "Môn này không phù hợp, không thích, chỉ cần đậu/qua môn là được",
            "Đen quá. Ôn mà không trúng tủ",
            "Lỗi là do giáo viên dạy nói kém. Chẳng hiểu gì cả"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng vì thể hiện sự chịu trách nhiệm cá nhân (personal accountability), nhận ra lỗi từ bản thân thay vì đổ lỗi cho external factors."
    },
    {
        id: 26,
        question: "Khách hàng yêu cầu TCIOS bổ sung thêm 2 ngày tập huấn sử dụng phần mềm. Sự kiện này nghĩa là gì? (Nhiều đáp án đúng)",
        options: [
            "Khách hàng đã thay đổi phạm vi quản lý dự án",
            "Khách hàng đã thay đổi phạm vi sản phẩm"
        ],
        correct: [0],
        type: "multiple",
        explanation: "A đúng. Tập huấn sử dụng là project management activity (training/knowledge transfer), không phải thay đổi sản phẩm phần mềm."
    },
    {
        id: 27,
        question: "Khách hàng yêu cầu TCIOS bổ sung 300 testcase. Sự kiện này nghĩa là gì? (Nhiều đáp án đúng)",
        options: [
            "Khách hàng đã thay đổi phạm vi quản lý dự án",
            "Khách hàng đã thay đổi phạm vi sản phẩm"
        ],
        correct: [0],
        type: "multiple",
        explanation: "A đúng. Bổ sung testcase là thay đổi testing activities trong project management scope, không phải thay đổi sản phẩm phần mềm."
    },
    {
        id: 28,
        question: "Dự án có đặc điểm nào sau đây? (Nhiều đáp án đúng)",
        options: [
            "Có tính tạm thời",
            "Tạo ra một sản phẩm hoặc dịch vụ hoặc kết quả",
            "Có tính đơn nhất",
            "Các dự án khác nhau có mục đích và phạm vi khác nhau"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Đây là 4 đặc điểm cơ bản của dự án theo PMI: Temporary, Unique product/service/result, Progressive elaboration, và mỗi dự án có purpose/scope riêng biệt."
    },
    {
        id: 29,
        question: "Sự phân lớp của thành công theo mức độ từ cao xuống thấp?",
        options: [
            "Thành công về cơ hội phát triển - Thành công về kinh tế, lợi nhuận - Thành công về kinh nghiệm, tri thức - Thành công về chất lượng, giá thành và chuyển giao",
            "Thành công về cơ hội phát triển - Thành công về kinh tế, lợi nhuận - Thành công về chất lượng, giá thành và chuyển giao",
            "Thành công về kinh nghiệm, tri thức - Thành công về cơ hội phát triển - Thành công về chất lượng, giá thành và chuyển giao - Thành công về kinh tế, lợi nhuận",
            "Thành công về kinh tế, lợi nhuận - Thành công về cơ hội phát triển - Thành công về chất lượng, giá thành và chuyển giao - Thành công về kinh nghiệm, tri thức",
            "Thành công về kinh nghiệm, tri thức - Thành công về cơ hội phát triển - Thành công về kinh tế, lợi nhuận - Thành công về chất lượng, giá thành và chuyển giao"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng theo Multilevel Project Success Framework: Strategic Success (cơ hội phát triển) → Business Success (kinh tế/lợi nhuận) → Product/PM Success (chất lượng/cost/delivery) → Process Success (kinh nghiệm/tri thức)."
    },
    {
        id: 30,
        question: "Trong 5 giai đoạn của PMBOK, giai đoạn nào thường chiếm nhiều thời gian thực hiện nhất?",
        options: [
            "Executing - Thực hiện",
            "Initiation - Khởi tạo dự án",
            "Monitoring and Controlling - Giám sát và Điều khiển",
            "Planning - Lập kế hoạch",
            "Closing - Đóng"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Execution phase thường là longest phase vì đây là giai đoạn thực sự triển khai tất cả công việc để tạo ra deliverables của dự án."
    },

    {
        id: 31,
        question: "Khởi tạo dự án là tiến trình đầu tiên của dự án được xét duyệt có đầu vào là gì? (Nhiều đáp án đúng)",
        options: [
            "Quy trình nghiệp vụ",
            "Môi trường doanh nghiệp",
            "Điều kiện làm việc",
            "Quy trình tổ chức",
            "Công cụ, Kỹ thuật"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "A, B, C, D đúng. Project initiation inputs bao gồm business processes, enterprise environmental factors, working conditions, organizational process assets. E không phải input mà là tools & techniques."
    },
    {
        id: 32,
        question: "Chọn phát biểu đúng về danh mục dự án? (Nhiều đáp án đúng)",
        options: [
            "Tập hợp các dự án mà một tổ chức hoặc một nhóm các bên liên quan đang thực hiện",
            "Trong danh mục, các dự án thường khác nhau về loại hình, độ phức tạp, chi phí, yêu cầu thời gian",
            "Mức độ rủi ro, mức độ ưu tiên của các dự án trong danh mục phụ thuộc chặt chẽ với nhau",
            "Có danh mục đầu tư có thể đang trong các giai đoạn bắt đầu, lập kế hoạch và thực hiện khác nhau ở các dự án khác nhau"
        ],
        correct: [0, 1, 3],
        type: "multiple",
        explanation: "A, B, D đúng. Portfolio là collection of projects với characteristics khác nhau và ở các giai đoạn khác nhau. C sai vì các dự án có thể independent về risk và priority."
    },
    {
        id: 33,
        question: "Công ty TCIOS gửi phiên bản alpha cho khách hàng test, nhận feedback lỗi và sửa chữa. Nguồn lực để khắc phục lỗi thuộc giai đoạn nào?",
        options: [
            "Thực hiện",
            "Giám sát và Điều khiển",
            "Khởi tạo dự án",
            "Đóng",
            "Lập kế hoạch"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Việc test, nhận feedback và fixing bugs trong quá trình development thuộc Execution phase - giai đoạn thực hiện các deliverables."
    },
    {
        id: 34,
        question: "Loại chi phí nào KHÔNG liên quan khi ước lượng chi phí phát triển sản phẩm phần mềm?",
        options: [
            "Chi phí máy móc thiết bị",
            "Chi phí quảng cáo tiếp thị",
            "Chi phí đào tạo kỹ năng liên quan cho các lập trình viên",
            "Chi phí vận chuyển bàn giao sản phẩm"
        ],
        correct: 1,
        type: "single",
        explanation: "B đúng. Chi phí quảng cáo tiếp thị là post-development marketing activities, không phải chi phí development. A, C, D đều là direct costs của quá trình phát triển."
    },
    {
        id: 35,
        question: "Nhóm quyết định chọn Java và yêu cầu người chỉ biết Python tự học Java. Đây là kiểu giải quyết mâu thuẫn nào?",
        options: [
            "Phục tùng (chấp nhận)",
            "Tránh",
            "Thỏa hiệp",
            "Cạnh tranh (thống trị)",
            "Pha trộn, hợp tác"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Đây là kiểu Accommodating - nhóm Python phải chấp nhận và thích nghi với quyết định của nhóm Java, tự học để phù hợp."
    },
    {
        id: 36,
        question: "Trong 5 giai đoạn của PMBOK, giai đoạn nào tiềm ẩn rủi ro nhiều nhất?",
        options: [
            "Executing – Thực hiện",
            "Monitoring and Controlling – Giám sát và Điều khiển",
            "Planning – Lập kế hoạch",
            "Initiation – Khởi tạo dự án",
            "Closing – Đóng"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Execution phase có rủi ro cao nhất vì đây là giai đoạn face với real-world challenges, team performance risks, và external factors."
    },
    {
        id: 37,
        question: "Các lĩnh vực nào thuộc vào quản lý dự án? (Nhiều đáp án đúng)",
        options: [
            "Quản lý tích hợp",
            "Quản lý phạm vi",
            "Quản lý thời gian",
            "Quản lý chi phí",
            "Quản lý chất lượng",
            "Quản lý nguồn nhân lực",
            "Quản lý giao tiếp",
            "Quản lý rủi ro",
            "Quản lý mua sắm"
        ],
        correct: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        type: "multiple",
        explanation: "Tất cả đều đúng. Theo PMBOK, quản lý dự án có 10 lĩnh vực kiến thức (Knowledge Areas) chính, bao gồm 9 lĩnh vực được liệt kê plus Stakeholder Management."
    },
    {
        id: 38,
        question: "Giám sát và kiểm soát có mục đích về yêu cầu gì? (Nhiều đáp án đúng)",
        options: [
            "Theo dõi, rà soát và điều chỉnh lại tiến độ",
            "Kiểm tra khối lượng thực hiện của dự án",
            "Theo dõi rủi ro trong quá trình thực hiện",
            "Cần có những đề xuất điều chỉnh kịp thời"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Monitoring & Controlling bao gồm schedule tracking, progress monitoring, risk monitoring và timely corrective actions."
    },
    {
        id: 39,
        question: "Kỹ năng quản lý là gì? (Nhiều đáp án đúng)",
        options: [
            "Hiểu và kiểm soát các thành viên",
            "Quản lý thành viên về nhiệm vụ cần thực hiện",
            "Tuân theo các bước 'Plan – Do – Check – Act'",
            "Tìm ra đặc trưng ở các thành viên và khai thác chúng"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Management skills bao gồm team understanding & control, task management, PDCA methodology và strength identification & utilization."
    },
    {
        id: 40,
        question: "Lựa chọn mục tiêu của dự án dựa trên yếu tố SWOT nào? (Nhiều đáp án đúng)",
        options: [
            "Điểm mạnh cần được sử dụng làm nền tảng",
            "Điểm yếu cần được sửa chữa, thay thế hoặc chấm dứt",
            "Các cơ hội cần được tận dụng, ưu tiên và nắm bắt kịp thời",
            "Các nguy cơ cần được lên phương án giải quyết"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Lựa chọn mục tiêu dự án cần dựa trên SWOT analysis toàn diện: leverage strengths, address weaknesses, exploit opportunities, mitigate threats."
    },
    {
        id: 41,
        question: "Công ty TCIO5 ước lượng 68 triệu dựa trên website trước đây 74 triệu và điều chỉnh do COVID-19. Đây là kỹ thuật ước lượng nào?",
        options: [
            "Analogous / Ước lượng tương tự",
            "Parametric / Ước lượng có tham số hiệu chỉnh",
            "Three-point estimating / PERT / Ước lượng 3 điểm",
            "Bottom-up / Ước lượng chi tiết từ dưới lên"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Analogous estimating sử dụng dữ liệu từ dự án tương tự trước đây (74 triệu) và điều chỉnh dựa trên expert judgment về điều kiện hiện tại (COVID-19 impact)."
    },
    {
        id: 42,
        question: "Tại sao ước lượng dự án ở giai đoạn System Design có độ chính xác cao nhưng ít ảnh hưởng tới kinh phí toàn bộ dự án?",
        options: [
            "Vì người thực hiện là các lập trình viên, không phải người có chuyên môn về kinh tế",
            "Vì nhóm tính toán các công việc kỹ thuật, không phải tính kinh phí dự án",
            "Vì cần nhiều nguồn lực để thực hiện, nên thường xảy ra khi hợp đồng dự án đã được thực hiện, giá trị hợp đồng đã xác định"
        ],
        correct: 2,
        type: "single",
        explanation: "Đúng. Khi đến System Design, hợp đồng đã được ký kết dựa trên ước lượng từ các giai đoạn đầu (Business Talk, Collect Requirement). Các budget decisions chính đã được establish ở các giai đoạn trước, nên dù ước lượng chính xác hơn nhưng ít ảnh hưởng đến tổng ngân sách."
    },
    {
        id: 43,
        question: "Trong kỹ năng giao tiếp D.E.S.C, Minh Đức thiếu yếu tố gì khi nói 'Em bận quá. Sếp giao cho người khác đi'? (Nhiều đáp án đúng)",
        options: [
            "thiếu Describe",
            "thiếu Express",
            "thiếu Specify",
            "thiếu Consequences"
        ],
        correct: [0, 3],
        type: "multiple",
        explanation: "A và D đúng. Thiếu Describe (không mô tả tình huống cụ thể mà chỉ nói 'em bận quá') và thiếu Consequences (không nêu hậu quả tích cực/tiêu cực của việc từ chối hay chấp nhận)."
    },
    {
        id: 44,
        question: "Trong kỹ năng giao tiếp D.E.S.C, Thành Nam thiếu yếu tố gì khi so sánh workload với Thủy? (Nhiều đáp án đúng)",
        options: [
            "thiếu Describe",
            "thiếu Express",
            "thiếu Specify",
            "thiếu Consequences"
        ],
        correct: [2, 3],
        type: "multiple",
        explanation: "C và D đúng. Thiếu Specify (không nêu rõ kết quả mong muốn - có thể là redistribution of tasks) và thiếu Consequences (không nói rõ điều gì sẽ xảy ra nếu workload không được điều chỉnh)."
    },
    {
        id: 45,
        question: "Thông số nào được coi là thước đo cho chất lượng của dự án?",
        options: [
            "Số lỗi; Tỷ lệ lỗi",
            "Thời gian thực hiện dự án",
            "Năng lực người tham gia, của lập trình viên",
            "Số testcase, Độ phủ testcase"
        ],
        correct: 0,
        type: "single",
        explanation: "A đúng. Defect metrics (số lỗi, defect density, defect rate) là thước đo trực tiếp và quan trọng nhất cho chất lượng software. B là schedule metric, C là input metric về resources, D là indirect measure về testing completeness."
    },
    {
        id: 46,
        question: "Khởi tạo dự án có những đặc điểm gì? (Nhiều đáp án đúng)",
        options: [
            "Là quy trình đầu tiên trong dự án",
            "Cần xác định mục đích của dự án",
            "Cần xác định tuyên ngôn của dự án",
            "Có sự giao tiếp giữa các bên liên quan trong dự án"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Project initiation là first phase, xác định purpose, tạo project charter (tuyên ngôn) và stakeholder communication."
    },
    {
        id: 47,
        question: "Khởi tạo dự án bao gồm những hoạt động nào? (Nhiều đáp án đúng)",
        options: [
            "Thực hiện việc định nghĩa một dự án mới hoặc một phát sinh mới của một dự án có sẵn",
            "Cần xác định yêu cầu dự án",
            "Cần xác định mức độ ưu tiên của dự án",
            "Phân tích các yêu cầu đầu tư",
            "Phân công trách nhiệm cho các bộ phận thực hiện"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "A, B, C, D đúng. Project initiation bao gồm defining project, requirements identification, priority determination, investment analysis. E (phân công trách nhiệm) thường thuộc planning phase."
    },
    {
        id: 48,
        question: "Chọn phát biểu đúng trong quy trình quản lý dự án phần mềm? (Nhiều đáp án đúng)",
        options: [
            "Là quy trình vận dụng những kiến thức, kỹ năng và kỹ thuật công nghệ vào hoạt động của dự án",
            "Mục đích của quy trình quản lý là để đạt được mục tiêu của dự án",
            "Quy trình quản lý dự án gồm có 5 giai đoạn (khởi tạo, lập kế hoạch, triển khai, kiểm tra và giám sát, và kết thúc)",
            "Mọi dự án đều có giai đoạn kết thúc"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "Tất cả đều đúng. Đây là các đặc điểm cơ bản của quy trình quản lý dự án phần mềm theo chuẩn quốc tế: áp dụng knowledge/skills/techniques, đạt mục tiêu, 5 phases, và closure phase."
    },
    {
        id: 49,
        question: "Chọn phát biểu đúng về quản lý dự án? (Nhiều đáp án đúng)",
        options: [
            "Người quản lý dự án là trung tâm kết nối",
            "Quản lý dự án là một công việc toàn thời gian",
            "Người quản lý dự án phải biết về vòng đời dự án",
            "Vai trò của người quản lý dự án trong việc thực hiện dự án trong các giai đoạn vòng đời là khác nhau",
            "Người lãnh đạo thay người quản lý phải nhận ra sự phức tạp của môi trường",
            "Các dự án thất bại chủ yếu đến từ nguyên nhân quản lý"
        ],
        correct: [0, 1, 2, 3, 4, 5],
        type: "multiple",
        explanation: "Tất cả đều đúng. Đây là các đặc điểm và trách nhiệm cơ bản của project management và project manager role: central connector, full-time job, lifecycle knowledge, evolving roles, environmental complexity awareness, management as primary failure cause."
    },
    {
        id: 50,
        question: "Tuyên ngôn dự án bao gồm những gì? (Nhiều đáp án đúng)",
        options: [
            "Mục đích",
            "Các mục tiêu cụ thể",
            "Các yêu cầu",
            "Các mốc thời gian",
            "Bản kế hoạch"
        ],
        correct: [0, 1, 2, 3],
        type: "multiple",
        explanation: "A, B, C, D đúng. Project Charter (tuyên ngôn dự án) bao gồm purpose, specific objectives, requirements, và milestones. E (bản kế hoạch chi tiết) thuộc planning phase, không phải initiation phase."
    }
];
