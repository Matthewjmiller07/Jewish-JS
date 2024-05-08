$(document).ready(function() {
    $('#fetchSefaria').click(function() {
        $.ajax({
            url: 'https://www.sefaria.org/api/texts/Genesis.1?commentary=0&context=0&pad=0&wrapLinks=0',
            type: 'GET',
            success: function(data) {
                $('#sefariaText').html(`<p><strong>${data.he}</strong></p><p>${data.text}</p>`);
            },
            error: function(error) {
                console.error('Error fetching Sefaria data:', error);
            }
        });
    });

    $('#fetchShabbat').click(function() {
        $.ajax({
            url: 'https://www.hebcal.com/shabbat?cfg=json&m=50&a=on&geo=pos&latitude=31.7683&longitude=35.2137&tzid=Asia/Jerusalem',
            type: 'GET',
            success: function(data) {
                var items = data.items.filter(item => item.category === 'candles');
                var listItems = items.map(item => `<li>${item.title}: ${item.date}</li>`).join('');
                $('#shabbatTimes').html(`<ul>${listItems}</ul>`);
            },
            error: function(error) {
                console.error('Error fetching Hebcal data:', error);
            }
        });
    });
});
