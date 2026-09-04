
/* =========================
   Monitor Data
========================= */

const monitors = [

    {
        name: "Users API",
        url: "api.shopwave.com/users",

        status: "up",
        response: "143 ms",
        uptime: "99.8%",
        last: "10s ago",

        checks: [
            {
                time: "10:50:10",
                status: "200 OK",
                trigger: "auto",
                response: "143 ms"
            },

            {
                time: "10:49:40",
                status: "200 OK",
                trigger: "auto",
                response: "138 ms"
            },

            {
                time: "10:48:55",
                status: "200 OK",
                trigger: "manual",
                response: "129 ms"
            }
        ]
    },


    {
        name: "Products API",
        url: "api.shopwave.com/products",

        status: "up",
        response: "201 ms",
        uptime: "99.2%",
        last: "10s ago",

        checks: [
            {
                time: "10:50:00",
                status: "200 OK",
                trigger: "auto",
                response: "201 ms"
            },

            {
                time: "10:49:30",
                status: "200 OK",
                trigger: "auto",
                response: "195 ms"
            }
        ]
    },


    {
        name: "Orders API",
        url: "api.shopwave.com/orders",

        status: "down",
        response: "—",
        uptime: "94.2%",
        last: "10s ago",

        checks: [
            {
                time: "10:50:00",
                status: "500 error",
                trigger: "auto",
                response: "—"
            },

            {
                time: "10:47:30",
                status: "timeout",
                trigger: "manual",
                response: "—"
            },

            {
                time: "10:45:00",
                status: "200 OK",
                trigger: "auto",
                response: "220 ms"
            }
        ]
    },


    {
        name: "Cart API",
        url: "api.shopwave.com/cart",

        status: "up",
        response: "98 ms",
        uptime: "99.9%",
        last: "12s ago",

        checks: [
            {
                time: "10:50:05",
                status: "200 OK",
                trigger: "auto",
                response: "98 ms"
            },

            {
                time: "10:49:35",
                status: "200 OK",
                trigger: "auto",
                response: "101 ms"
            }
        ]
    },


    {
        name: "Payments API",
        url: "api.shopwave.com/payments",

        status: "up",
        response: "77 ms",
        uptime: "99.95%",
        last: "8s ago",

        checks: [
            {
                time: "10:50:12",
                status: "200 OK",
                trigger: "auto",
                response: "77 ms"
            },

            {
                time: "10:49:42",
                status: "200 OK",
                trigger: "manual",
                response: "79 ms"
            }
        ]
    }

];


/* =========================
   Get Monitor List
========================= */

const monitorList =
    document.getElementById("monitor-list");


/* =========================
   Create One Monitor Card
========================= */

function createMonitorCard(monitor) {

    const card = document.createElement("div");

    card.className = "card";


    /* -------------------------
       Create Checks
    ------------------------- */

    let checksHTML = "";


    monitor.checks.forEach(function(check) {

        let resultClass = "success";

        if (check.status !== "200 OK") {
            resultClass = "failure";
        }


        let triggerClass = "auto";

        if (check.trigger === "manual") {
            triggerClass = "manual";
        }


        checksHTML += `

            <div class="check">

                <div class="check-left">

                    <span class="check-time">
                        ${check.time}
                    </span>

                    <span class="${triggerClass}">
                        ${check.trigger}
                    </span>

                </div>


                <div class="check-right">

                    <span class="${resultClass}">
                        ${check.status}
                    </span>

                    <span>
                        ${check.response}
                    </span>

                </div>

            </div>

        `;

    });


    /* -------------------------
       Create Card
    ------------------------- */

    card.innerHTML = `

        <div class="card-header">

            <div class="card-top">

                <div>

                    <div class="api-name">
                        ${monitor.name}
                    </div>

                    <div class="api-url">
                        ${monitor.url}
                    </div>

                </div>


                <span class="arrow">
                    ▶
                </span>

            </div>


            <div class="status-line">

                <span class="badge ${monitor.status}">
                    ${monitor.status === "up" ? "UP" : "DOWN"}
                </span>

                <span>
                    ${monitor.response}
                </span>

                <span>
                    ${monitor.uptime} uptime
                </span>

                <span>
                    Last check: ${monitor.last}
                </span>

            </div>

        </div>


        <div class="collapsed-hint">
            Click to expand
        </div>


        <div class="card-details">

            <div class="checks-title">
                Recent checks
            </div>


            <div class="checks">

                <div class="checks-header">

                    auto = scheduled check
                    &nbsp;&nbsp;&nbsp;
                    manual = you triggered it

                </div>


                ${checksHTML}

            </div>

        </div>

    `;


    /* =========================
       Open / Close Card
    ========================= */

    const header =
        card.querySelector(".card-header");


    header.addEventListener("click", function() {

        card.classList.toggle("open");

    });


    return card;
}


/* =========================
   Display All Monitors
========================= */

monitors.forEach(function(monitor) {

    const card =
        createMonitorCard(monitor);

    monitorList.appendChild(card);

});


/* =========================
   Open First Monitor
========================= */

monitorList.firstElementChild.classList.add("open");

