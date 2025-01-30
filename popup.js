document.addEventListener("DOMContentLoaded", function() {
    const colors = {
        "General Black": ["#0f0f0f"],
        
        "Flycart Primary High": ["#eb262c", "#100202", "#220304", "#340506", "#460608", "#58080b", "#6a0a0d", "#7c0b0f", "#8e0d11", "#a00f13", "#b21015", "#c41217", "#d6141a", "#e8151c"],
        
        "Flycart Primary Light": ["#eb262c", "#ed383d", "#ee4a4f", "#f05c60", "#f26e72", "#f38083", "#f59295", "#f7a4a6", "#f8b6b8", "#fac8c9", "#fcdadb", "#fdecec"],
        
        "Flycart Secondary High": ["#1f87ff", "#00050b", "#000e1f", "#002146", "#002a5a", "#00336d", "#003c81", "#004595", "#004ea8", "#0057bc", "#0060d0", "#0069e3", "#0073f7"],
        
        "Flycart Secondary Light": ["#1f87ff", "#0b7cff", "#1f87ff", "#3392ff", "#469cff", "#5aa7ff", "#6db1ff", "#81bcff", "#95c6ff", "#a8d1ff", "#bcdbff", "#d0e6ff", "#e3f0ff", "#f7fbff"],
        
        "Retainful Primary High": ["#f75a1b", "#120601", "#250c01", "#381202", "#4b1703", "#5e1d03", "#712304", "#842905", "#972f05", "#aa3506", "#bd3b07", "#d04107", "#e34708", "#f64d09"],
        
        "Retainful Primary Light": ["#f75a1b", "#f8682e", "#f87541", "#f98354", "#fa9167", "#fa9f7a", "#fbac8d", "#fcbaa0", "#fcc8b3", "#fdd5c6", "#fee3d9", "#fef1eb", "#fffffe"],
        
        "WP Loyalty Primary High": ["#5149eb", "#02010c", "#05031e", "#070530", "#0a0741", "#0d0953", "#100b65", "#120d76", "#150f88", "#18119a", "#1a13ab", "#1d15bd", "#2017cf"],
        
        "WP Loyalty Primary Light": ["#5149eb", "#2f26e7", "#4037e9", "#5149eb", "#625bed", "#736cef", "#847ef1", "#9590f3", "#a5a1f5", "#b6b3f7", "#c7c5f9", "#d8d6fb", "#e9e8fc", "#fafafe"],
        
        "UpsellWP High": ["#043785", "#00040b", "#000c1e", "#001432", "#001b45", "#002359", "#002b6d", "#003280", "#003a94", "#0042a7", "#004abb", "#0051cf", "#0059e2", "#0061f6"],
        
        "UpsellWP Light": ["#043785", "#0b6bff", "#1e77ff", "#3282ff", "#458eff", "#599aff", "#6da6ff", "#80b2ff", "#94beff", "#a7caff", "#bbd6ff", "#cfe2ff", "#e2eeff", "#f6f9ff"],
        
        "Afflr High": ["#ffe5c9", "#050300", "#180d00", "#2c1700", "#402100", "#532b00", "#673500", "#7b4000", "#8e4a00", "#a25400", "#b55e00", "#c96800", "#dd7200", "#f07d00"],
        
        "Afflr Light": ["#ffe5c9", "#ff8705", "#ff9018", "#ff992c", "#ffa340", "#ffac53", "#ffb667", "#ffbf7b", "#ffc98e", "#ffd2a2", "#ffdcb5", "#ffe5c9", "#ffeedd", "#fff8f0"],
        
        "Afflr High 2": ["#ffba70", "#0e0700", "#221100", "#351c00", "#492600", "#5c3000", "#703a00", "#844400", "#974e00", "#ab5800", "#be6300", "#d26d00", "#e67700"],
        
        "Afflr Light 2": ["#ffba70", "#ff8b0e", "#ff9422", "#ff9e35", "#ffa749", "#ffb15c", "#ffba70", "#ffc384", "#ffcd97", "#ffd6ab", "#ffe0be", "#ffe9d2", "#fff3e6", "#fffcf9"],
        
        "Relay High": ["#1a73e8", "#000103", "#020a15", "#041326", "#061b38", "#07244a", "#092d5c", "#0b366e", "#0d3e80", "#0f4791", "#1050a3", "#1259b5", "#1461c7", "#166ad9"],
        
        "Relay Light": ["#1a73e8", "#2c7eea", "#3e89ec", "#4f94ed", "#619fef", "#73a9f1", "#85b4f3", "#97bff5", "#a9caf6", "#bad5f8", "#cce0fa", "#deebfc", "#f0f6fd"],
        
        "Spark Editor High": ["#165236", "#010503", "#05140d", "#0a2417", "#0e3322", "#12432c", "#165236", "#1a6140", "#1e714a", "#228055", "#27905f", "#2b9f69", "#2faf73", "#33be7d"],
        
        "Spark Editor Light": ["#165236", "#3bca87", "#4ace91", "#5ad39a", "#69d7a4", "#78dbad", "#88dfb6", "#97e3c0", "#a7e7c9", "#b6ecd3", "#c6f0dc", "#d5f4e6", "#e5f8ef", "#f4fcf8"],
        
        "WP Bundle High": ["#02a651", "#000b05", "#001e0f", "#013218", "#014522", "#01582b", "#016c35", "#027f3e", "#029348", "#02a651", "#02b95a", "#02cd64", "#03e06d", "#03f477"],
        
        "WP Bundle Light": ["#02a651", "#0efc81", "#21fc8b", "#35fd95", "#48fd9f", "#5cfda9", "#6ffdb3", "#82fdbe", "#96fec8", "#a9fed2", "#bcfedc", "#d0fee6", "#e3fff0", "#f7fffb"]
      }
      ;
    
    const colorContainer = document.getElementById("colorContainer");
    const notification = document.getElementById("notification");
    
    function showNotification() {
        notification.style.display = "block";
        setTimeout(() => { notification.style.display = "none"; }, 1000);
    }
    
    Object.entries(colors).forEach(([brand, shades]) => {
        const section = document.createElement("div");
        section.className = "color-section";
        
        const title = document.createElement("div");
        title.className = "color-title";
        title.textContent = brand;
        section.appendChild(title);
        
        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        
        shades.forEach(color => {
            const colorDiv = document.createElement("div");
            colorDiv.className = "color";
            colorDiv.style.backgroundColor = color;
            colorDiv.title = color;
            colorDiv.addEventListener("click", () => {
                navigator.clipboard.writeText(color);
                showNotification();
            });
            
            colorBox.appendChild(colorDiv);
        });
        
        section.appendChild(colorBox);
        colorContainer.appendChild(section);
    });
});

const colors = {
    "General Black": ["#0f0f0f"],
    "Flycart Primary High": ["#eb262c", "#100202", "#220304", "#340506", "#460608", "#58080b", "#6a0a0d", "#7c0b0f", "#8e0d11", "#a00f13", "#b21015", "#c41217", "#d6141a", "#e8151c"],
        "Flycart Primary Light": ["#eb262c", "#ed383d", "#ee4a4f", "#f05c60", "#f26e72", "#f38083", "#f59295", "#f7a4a6", "#f8b6b8", "#fac8c9", "#fcdadb", "#fdecec"],
        "Retainful Primary High": ["#f75a1b", "#120601", "#250c01", "#381202", "#4b1703", "#5e1d03", "#712304", "#842905", "#972f05", "#aa3506", "#bd3b07", "#d04107", "#e34708", "#f64d09"],
        "Retainful Primary Light": ["#f75a1b", "#f8682e", "#f87541", "#f98354", "#fa9167", "#fa9f7a", "#fbac8d", "#fcbaa0", "#fcc8b3", "#fdd5c6", "#fee3d9", "#fef1eb"],
        "WPLoyalty Primary High": ["#5149eb", "#02010c", "#05031e", "#070530", "#0a0741", "#0d0953", "#100b65", "#120d76", "#150f88", "#18119a", "#1a13ab", "#1d15bd", "#2017cf"],
        "WPLoyalty Primary Light": ["#5149eb", "#2f26e7", "#4037e9", "#5149eb", "#625bed", "#736cef", "#847ef1", "#9590f3", "#a5a1f5", "#b6b3f7", "#c7c5f9", "#d8d6fb", "#e9e8fc", "#fafafe"],
    "UpsellWP Primary High": ["#002359", "#000103", "#000206", "#00030a", "#00040d", "#000510", "#000614", "#000717", "#00081b", "#00091e", "#000a22", "#000b25", "#000c29", "#000d2c"],
    "UpsellWP Primary Light": ["#002359", "#003b8c", "#0050bf", "#0064f2", "#0079ff", "#009eff", "#00b3ff", "#00c7ff", "#00dcff", "#00f0ff", "#00f5ff", "#00faff", "#00ffff", "#00ffff"],
    "Afflr High": ["#1a1a1a", "#000307", "#000b1a", "#01132e", "#011b41", "#012354", "#022b68", "#02337b", "#023b8e", "#0243a2", "#034bb5", "#0353c8", "#035bdc", "#0463ef"],
    "Afflr Light": ["#1a1a1a", "#0b6dfb", "#1e78fc", "#3284fc", "#458ffc", "#589bfc", "#6ca7fd", "#7fb2fd", "#92befd", "#a5c9fe", "#b9d5fe", "#cce0fe", "#dfecff", "#f3f8ff"],
    "Relay High": ["#1a73e8", "#000103", "#020a15", "#041326", "#061b38", "#07244a", "#092d5c", "#0b366e", "#0d3e80", "#0f4791", "#1050a3", "#1259b5", "#1461c7", "#166ad9"],
    "Relay Light": ["#1a73e8", "#2c7eea", "#3e89ec", "#4f94ed", "#619fef", "#73a9f1", "#85b4f3", "#97bff5", "#a9caf6", "#bad5f8", "#cce0fa", "#deebfc", "#f0f6fd"],
    "Spark Editor High": ["#165236", "#010503", "#05140d", "#0a2417", "#0e3322", "#12432c", "#165236", "#1a6140", "#1e714a", "#228055", "#27905f", "#2b9f69", "#2faf73", "#33be7d"],
    "Spark Editor Light": ["#165236", "#3bca87", "#4ace91", "#5ad39a", "#69d7a4", "#78dbad", "#88dfb6", "#97e3c0", "#a7e7c9", "#b6ecd3", "#c6f0dc", "#d5f4e6", "#e5f8ef", "#f4fcf8"],
    "WP Bundle High": ["#02a651", "#000b05", "#001e0f", "#013218", "#014522", "#01582b", "#016c35", "#027f3e", "#029348", "#02a651", "#02b95a", "#02cd64", "#03e06d", "#03f477"],
    "WP Bundle Light": ["#02a651", "#0efc81", "#21fc8b", "#35fd95", "#48fd9f", "#5cfda9", "#6ffdb3", "#82fdbe", "#96fec8", "#a9fed2", "#bcfedc", "#d0fee6", "#e3fff0", "#f7fffb"]
};