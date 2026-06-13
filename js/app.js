document.addEventListener("DOMContentLoaded", init);

// .............Auto SASA.............

const templateList = [
  { group: "Group 1", path: "shelf=0/slot=5/sub_slot=3", sasa: "SASA 1" },

  { group: "Group 2", path: "shelf=0/slot=5/sub_slot=1", sasa: "SASA 1" },

  { group: "Group 2", path: "shelf=0/slot=5/sub_slot=2", sasa: "SASA 2" },

  { group: "Group 3", path: "shelf=0/slot=5/sub_slot=4", sasa: "SASA 1" },

  { group: "Group 3", path: "shelf=0/slot=5/sub_slot=5", sasa: "SASA 2" },

  { group: "Group 4", path: "shelf=0/slot=1/sub_slot=2", sasa: "SASA 1" },

  { group: "Group 4", path: "shelf=0/slot=1/sub_slot=3", sasa: "SASA 2" },

  { group: "Group 4", path: "shelf=1/slot=1/sub_slot=2", sasa: "SASA 3" },

  { group: "Group 4", path: "shelf=1/slot=1/sub_slot=3", sasa: "SASA 4" },

  {
    group: "Group 5",
    path: "shelf=0/slot=1/sub_slot=4/port=1",
    sasa: "SASA 1",
  },

  {
    group: "Group 5",
    path: "shelf=0/slot=1/sub_slot=5/port=1",
    sasa: "SASA 2",
  },

  {
    group: "Group 5",
    path: "shelf=1/slot=1/sub_slot=4/port=1",
    sasa: "SASA 3",
  },

  {
    group: "Group 5",
    path: "shelf=1/slot=1/sub_slot=5/port=1",
    sasa: "SASA 4",
  },

  { group: "Group 6", path: "shelf=0/slot=45", sasa: "SASA 1 A side" },

  { group: "Group 6", path: "shelf=1/slot=45", sasa: "SASA 2 B side" },

  { group: "Group 6", path: "shelf=0/slot=47", sasa: "SASA 3 A side" },

  { group: "Group 6", path: "shelf=1/slot=47", sasa: "SASA 4 B side" },

  { group: "Group 7", path: "shelf=0/slot=19", sasa: "SASA 1 A side" },

  { group: "Group 7", path: "shelf=0/slot=24", sasa: "SASA 2 A side" },

  { group: "Group 7", path: "shelf=0/slot=29", sasa: "SASA 3 A side" },

  { group: "Group 7", path: "shelf=0/slot=34", sasa: "SASA 4 A side" },

  { group: "Group 8", path: "shelf=0/slot=6", sasa: "SASA 1 A side" },

  { group: "Group 8", path: "shelf=1/slot=6", sasa: "SASA 2 B side" },

  { group: "Group 8", path: "shelf=0/slot=7", sasa: "SASA 3 A side" },

  { group: "Group 8", path: "shelf=1/slot=7", sasa: "SASA 4 B side" },

  {
    group: "Group 9",
    path: "shelf=0/slot=1/sub_slot=1/port=1",
    sasa: "SASA 1",
  },

  {
    group: "Group 9",
    path: "shelf=0/slot=1/sub_slot=1/port=2",
    sasa: "SASA 2",
  },

  {
    group: "Group 9",
    path: "shelf=0/slot=13/sub_slot=1/port=1",
    sasa: "SASA 2",
  },

  {
    group: "Group 9",
    path: "shelf=0/slot=1/sub_slot=1/port=3",
    sasa: "SASA 3",
  },

  {
    group: "Group 9",
    path: "shelf=1/slot=1/sub_slot=1/port=1",
    sasa: "SASA 3",
  },

  {
    group: "Group 9",
    path: "shelf=1/slot=13/sub_slot=1/port=1",
    sasa: "SASA 4",
  },

  { group: "Group 10", path: "shelf=0/slot=6", sasa: "SASA 1" },

  { group: "Group 11", path: "shelf=0/slot=3/sub_slot=4", sasa: "SASA 1" },

  { group: "Group 12", path: "shelf=0/slot=13/sub_slot=4", sasa: "SASA 1" },

  { group: "Group 12", path: "shelf=0/slot=13/sub_slot=5", sasa: "SASA 2" },

  { group: "Group 12", path: "shelf=1/slot=13/sub_slot=4", sasa: "SASA 3" },

  { group: "Group 12", path: "shelf=1/slot=13/sub_slot=5", sasa: "SASA 4" },

  { group: "Group 12", path: "na", sasa: "na" },

  { group: "Group 13", path: "shelf=0/slot=1/sub_slot=6", sasa: "SASA 1" },

  {
    group: "Group 14",
    path: "shelf=0/slot=3/sub_slot=1/port=1",
    sasa: "SASA 1",
  },

  { group: "Group 14", path: "Single SASA Splitter", sasa: "SASA n/a" },

  {
    group: "Group 15",
    path: "shelf=0/slot=19/sub_slot=1/port=1",
    sasa: "SASA 1",
  },

  {
    group: "Group 15",
    path: "shelf=0/slot=19/sub_slot=1/port=3",
    sasa: "SASA 2",
  },

  { group: "Group 20", path: "test", sasa: "SASA 1" },

  { group: "Group 20", path: "test", sasa: "SASA 1" },
];

function initTemplates() {
  const stored = JSON.parse(localStorage.getItem("noteTemplates")) || [];

  // Define your default hard-coded templates
  const defaultTemplates = [
    {
      name: "Blank-Notes",
      text: "Received a call from CSE [[NAME]] with EIN:- [[EIN]], working on [[OGEA]]. The ONT serial number is [[ONT_SERIAL]] for [Route: [ROUTE]] CSE confirmed that they are receiving a solid PON light and that all other services are functioning correctly.",
    },
    {
      name: "ONT Activation",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN:- [[EIN]], working on [[OGEA]]. The ONT serial number is [[ONT_SERIAL]]. CSE contacted us for ONT activation. V21 was activated for [[ROUTE]], and the circuit was built automatically. CSE confirmed that they are receiving a solid PON light and that all other services are functioning correctly.",
    },
    {
      name: "Flashing PON V21 Activation",
      text: "DCoE Note: Received call from CSE:-[[NAME]] with EIN:-[[EIN]] working on [[OGEA]], CSE has scanned the ONT serial no:-[[ONT_SERIAL]] but facing flashing PON light on [[ROUTE]] checked the milestone for V21 was not initiated, so initiated V21 and the circuit got built automatically. CSE confirmed he is getting solid PON light, and all the other services are working fine as well.",
    },
    {
      name: "Flashing PON",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]] , working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Upon checking, the milestone for V21 had already been initiated, and there were no open exceptions. The ONT serial number and services were correctly built on the EMS, but the ONT was not discovering on a different route. The ranging was correct in the EMS, and the light level at the ONT was [[LIGHT]]. CSE then tried a different ONT with serial number [[SPARE_ONT]], but the flashing PON issue persisted. The old ONT serial number was updated back, and as per the wiki guidelines, the CSE was advised that this is a one-way light issue, likely caused by a damaged lead-in. Consequently, the CSE was advised to investigate the network.",
    },
    {
      name: "Flashing PON Incorrect ONT S/N",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Upon checking, the milestone for V21 had already been initiated, and there were no open exceptions. Accessed the EMS and found that an incorrect ONT serial number [[SPARE_ONT]] was present on the route. Updated the correct ONT serial number in both EMS and SRIMs. CSE confirmed a solid PON light, and all other services are functioning correctly.",
    },
    {
      name: "ONT S/N Change",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], regarding an ONT change on [[ROUTE]] with new ONT S/N [[ONT_SERIAL]]. Accessed EMS and found the old ONT S/N [[SPARE_ONT]] was still present. Updated the correct ONT S/N in EMS and SRIMs. CSE confirmed a solid PON light, and all other services are functioning correctly.",
    },
    {
      name: "In Course of Re-route for Provision Job",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light due to a CBT re-route on [[ROUTE]]. In SRIMS, it was in the course of re-route, and the circuit had been built as per the old CBT route. Deleted the previous circuit and initiated the V21 milestone. The circuit was built automatically on the correct route as per SRIMS. CSE confirmed a solid PON light and services on the router.",
    },
    {
      name: "In Course of Re-route for Repair Job",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light due to a CBT re-route on [[ROUTE]]. In SRIMS, it was in the course of re-route, and the circuit had been built as per the old CBT route. Deleted the previous circuit and manually built the circuit on the correct route as per SRIMS. CSE confirmed a solid PON light and services on the router.",
    },
    {
      name: "Mis-Route/Incorrect SASA",
      text: `DCoE Notes: Received a call from CSE [[NAME]] with EIN:- [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Checked the circuit, which was built as per SRIMS, but the light was reflecting on a different GPON.

Correct Route: [[SASA_1]]

[[CORRECT_SASA]]

Incorrect Route: [[SASA_2]]

[[INCORRECT_SASA]]

Advised the CSE about the light coming on a different GPON and requested to raise a fusion for an N11 engineer.`,
    },
    {
      name: "Re-Route",
      text: `DCoE Notes: Received a call from CSE [[NAME]] with EIN:- [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Checked the circuit, which was built as per SRIMS, but the light was reflecting on a different GPON.

Correct Route: [[SASA_1]]

[[CORRECT_SASA]]

Required Route: [[SASA_2]]

[[INCORRECT_SASA]]

Advised the CSE about the light coming on a different GPON and transferred the call to the 2nd line with 2nd line form with reference [[Reference]].`,
    },

    {
      name: "Line is either not configured in EMS or multiple discrepancies identified between EMS and SRIMS",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], reporting that the line is either not configured in EMS or there are multiple discrepancies identified between EMS and SRIMS on [[ROUTE]]. Upon investigation, found that there was a different ONT serial number [[SPARE_ONT]] in SRIMS and EMS. Updated the correct details in the SRIMS application and performed a line test, which passed with no problems found. CSE also confirmed the same.",
    },
    {
      name: "EMS CP tags configuration fail",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], reporting an EMS CP tags configuration issue on [[ROUTE]]. Accessed EMS and found missing builds. Manually built the circuit, and CSE confirmed a solid PON light, and all other services were functioning correctly.",
    },
    {
      name: "Testing indicates a problem with the headend handover port status on EMS with Error code 1713",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]],reporting that testing indicates a problem with the headend handover port status on EMS with Error Code 1713. Accessed the EMS and checked the builds, which were correct. As per the wiki guidelines, transferred the call to the 2nd line (Adtran Support) with a 2nd line form reference [[REFERENCE]].",
    },
    {
      name: "Two Services on same NAD key",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], but was not receiving services on the router. Checked and found no open exceptions. Located the [[ROUTE]] from EMS and found missing builds. Tried to manually build the circuit but was unable to due to two services on the same NAD key, while the customer had only one service. Advised the CSE to inform the customer to contact the service provider and cease one service.",
    },
    {
      name: "Slow Speeds",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], reporting slow speeds on [[ROUTE]]. CSE confirmed downstream bandwidth as [[DOWNSTREAM]]Mbit/s and upstream bandwidth as [[UPSTREAM]]Mbit/s. Checked and found the ONT port was in sync with the correct serial number and had a good light reading of [[LIGHT]]. Builds were correct with no alarms. Requested the CSE to change the Ethernet cable and clean the connector into the ONT. CSE reported still experiencing slow speeds. Changed the ONT with [[SPARE_ONT]], and once the software was updated, requested the CSE to perform a test with a laptop (VPN switched off), with a wired connection to the hub, with nothing else connected to the hub. CSE performed a throughput test from [www.speedtest.net], but the results were not greater than two-thirds of the sync speed, and the CSE still reported downstream bandwidth as [[DOWNSTREAM]]Mbit/s and upstream bandwidth as [[UPSTREAM]]Mbit/s. As per the wiki guidelines, transferred the call to the 2nd line with 2nd line form with reference [[REFERENCE]].",
    },
    {
      name: "No web pages",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], reporting an inability to load any web pages on any device. Checked and found no open exceptions. The EU router showed the correct lights, but no web pages could be obtained. Located the [[ROUTE]] from EMS and confirmed the port was in sync with the correct ONT serial number and had a good light reading of [[LIGHT]]. Checked that the ONT software was updated. Performed a woosh line test, which passed with no problems found. Checked the builds in EMS, which were correct. Advised the CSE to check the web pages on an alternative device, but the issue persisted. As per the wiki guidelines, transferred the call to the 2nd line with 2nd line form with reference [[REFERENCE]].",
    },
    {
      name: "Nokia GHOST BUILDS",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], but was not receiving services on the router. Checked and found no open exceptions. Located the [[ROUTE]] from EMS and found missing builds. So Tried to manually build the circuit but was unable to build it, because entry already exist. So checked in background but found ghost data present there, so as per WIKI guidelines transferred call to Nokia Support. - with reference [[REFERENCE]]",
    },
    {
      name: "MANUAL BUILDS NOTES",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONTSERIAL]] but encountered a flashing PON light on [[ROUTE]]. Upon checking, the milestone for V21 had already been initiated, and there were no open exceptions. Accessed the EMS and found that builds were missing, so manually build the circuit. CSE confirmed he is getting solid PON light, and all the other services are working fine as well.",
    },
    {
      name: "DATA HELD IN SRIMs Doesn't MATCH WITH EMS DATA",
      text: "Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]], reporting data held in SRIMS and EMS does not match or is missing for ONT serial number on [[ROUTE]]. Check with EMS and SRIMs found different ONT with serial number [[SPARE_ONT]] present in SRIMS updated it with the correct one. CSE confirm the line test pass with no problem found.",
    },
    {
      name: "CBT STATUS NOTES",
      text: "Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]] wants to know the status of the CBT, log in into EMS [[ROUTE]] and confirmed the CBT status was up. Informed the CSE that the CBT is toggle ON.",
    },
    {
      name: "ROUTING UPDATE",
      text: "DCoE Notes: Received a call from CSE [[NAME] ] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Checked the milestone for V21, which had already been initiated, but V21 had failed due to an exception [FTTP Invalid ONT Serial Number]. Cleared the error by manually building the circuit. while building the circuit found the FE Bridge option is missing for route[........... ], so build the circuit on[ ................ ] and raise an incedent to SRIMs team for updating the route with incedent ID - [ REQ.... ]. CSE confirmed that they are receiving a solid PON light and that all other services are functioning correctly. but reporting EMS cable link configuration issue, advice the CSE to delay the JOB for 24 hours as we have already raise an incedent.",
    },
    {
      name: "EMS CABLE LINK",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]], with ONT serial number [[ONT_SERIAL]], reporting EMS cable link configuration issue on [[ROUTE]]. Upon investigation, found that the builds are missing, so manually build the circuit and perform a woosh line test which is pass with no problem found. CSE confirmed that they are receiving a solid PON light and that all other services are functioning correctly.",
    },
    {
      name: "CSE Real-Time ONT/Line Loss Issue",
      text: "CSE [[NAME]] reported a real-time ONT/line loss issue for EIN:- [[EIN]], working on [[OGEA]]. Upon checking on EMS, found high light reading at the ONT [[LIGHT]]. Advised the CSE to investigate the network between the ONT and the splitter, verify all splices, and coordinate with the N11 Engineer for further assistance. [Route: [[ROUTE]]]",
    },
    {
      name: "V21 Failure Queue",
      text: "DCoE Notes: Received a call from CSE [[NAME]] with EIN [[EIN]], working on [[OGEA]]. CSE scanned the ONT serial number [[ONT_SERIAL]] but encountered a flashing PON light on [[ROUTE]]. Checked the milestone for V21, which had already been initiated, but V21 had failed due to an exception [FTTP V21 Failure Queue]. Cleared the error by manually building the circuit. CSE confirmed a solid PON light, and all other services were functioning correctly and progressed the exception by performing NEXT in HUD.",
    },

    // Add more defaults here
  ];

  // Merge defaults into localStorage if missing
  defaultTemplates.forEach((tpl) => {
    if (!stored.find((t) => t.name === tpl.name)) {
      stored.push(tpl);
    }
  });

  localStorage.setItem("noteTemplates", JSON.stringify(stored));
  return defaultTemplates;
}

function init() {
  console.log("FTTP ES Notes Loaded");

  initTemplates();
  bindEvents();
  setupInputValidation();
  loadHistory();
  loadTemplates();
  generateSpeedCards();
  populateNoteTypeDropdown();

  makeDesktopProfilesCopyable();
}

function bindEvents() {
  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  document
    .getElementById("mobileThemeBtn")
    .addEventListener("click", toggleTheme);

  document
    .getElementById("menuBtn")
    .addEventListener("click", toggleMobileMenu);

  document
    .getElementById("speedTableToggle")
    .addEventListener("click", toggleSpeedTable);

  document
    .getElementById("speedSearch")
    .addEventListener("keyup", filterSpeedTable);

  document
    .getElementById("toggleHelpBtn")
    .addEventListener("click", toggleHelpLine);

  document.getElementById("clearBtn").addEventListener("click", clearForm);

  document
    .getElementById("generateBtn")
    .addEventListener("click", handleGenerateNote);

  document
    .getElementById("ogeaLabel")
    .addEventListener("click", () => copyFromInput("ogea"));
  document
    .getElementById("einLabel")
    .addEventListener("click", () => copyFromInput("ein"));
  document
    .getElementById("ontLabel")
    .addEventListener("click", () => copyFromInput("ontSerial"));
  document
    .getElementById("spareOntLabel")
    .addEventListener("click", () => copyFromInput("spareOnt"));

  document.getElementById("copyBtn").addEventListener("click", copyNote);
  document.getElementById("editBtn").addEventListener("click", toggleEdit);
  //   document.addEventListener("click", handleOutsideClick);

  document.getElementById("saveBtn").addEventListener("click", saveNote);

  document.getElementById("historyBtn").addEventListener("click", openHistory);

  document
    .getElementById("mobileHistoryBtn")
    .addEventListener("click", openHistory);

  document
    .getElementById("closeHistoryBtn")
    .addEventListener("click", closeHistory);

  document.getElementById("historyModal").addEventListener("click", (e) => {
    if (e.target.id === "historyModal") {
      closeHistory();
    }
  });

  document
    .getElementById("historySearch")
    .addEventListener("input", filterHistory);
  document
    .getElementById("sortHistory")
    .addEventListener("change", (e) => sortHistory(e.target.value));
  document
    .getElementById("deleteHistoryBtn")
    .addEventListener("click", clearHistory);

  document
    .getElementById("openTemplateBtn")
    .addEventListener("click", openTemplateModal);
  document
    .getElementById("addTemplateBtn")
    .addEventListener("click", addTemplate);

  document
    .getElementById("clearTemplateBtn")
    .addEventListener("click", function () {
      document.getElementById("templateName").value = "";
      document.getElementById("templateText").value = "";
      document.getElementById("templatePreview").classList.add("hidden"); // hide preview if visible
      document.getElementById("templatePreview").innerText = ""; // clear preview content
      // Hide Save button when fields are cleared
      document.getElementById("saveTemplateBtn").classList.add("hidden");
      s;
      showToast("Fields cleared", "modal"); // optional toast message
    });

  document
    .getElementById("clearTemplatesBtn")
    .addEventListener("click", clearTemplates);

  document
    .getElementById("resetTemplatesBtn")
    .addEventListener("click", resetTemplates);

  // ✅ Add your footer help toggle here
  const footerHelpBtn = document.getElementById("footerHelpBtn");
  const helpContent = document.getElementById("helpContent");

  if (footerHelpBtn && helpContent) {
    footerHelpBtn.addEventListener("click", () => {
      helpContent.classList.toggle("hidden");
    });
  }

  document
    .getElementById("closeTemplateBtn")
    .addEventListener("click", closeTemplateModal);
  document
    .getElementById("previewTemplateBtn")
    .addEventListener("click", previewTemplate);
  document
    .getElementById("templateSearch")
    .addEventListener("input", filterTemplates);
  document
    .getElementById("scrollTopBtn")
    .addEventListener("click", scrollToTop);

  document.getElementById("templateSort").addEventListener("change", () => {
    const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];
    renderTemplates(templates);
  });

  // Attach event listeners so SASA updates automatically
  document
    .getElementById("correctRoute")
    .addEventListener("input", autoFillSasa);
  document
    .getElementById("incorrectRoute")
    .addEventListener("input", autoFillSasa);

  //mobile menu
  document
    .getElementById("mobileAddTemplateBtn")
    .addEventListener("click", openTemplateModal);

  const mobileSearch = document.getElementById("speedCardSearch");

  if (mobileSearch) {
    mobileSearch.addEventListener("input", filterSpeedCards);
  }

  const noteTypeInput = document.getElementById("noteType");
  const noteTypeDropdown = document.getElementById("noteTypeDropdown");

  if (noteTypeInput && noteTypeDropdown) {
    // Show dropdown
    noteTypeInput.addEventListener("focus", () => {
      populateNoteTypeDropdown(noteTypeInput.value);
      noteTypeDropdown.classList.remove("hidden");
    });

    // Filter while typing
    noteTypeInput.addEventListener("input", () => {
      populateNoteTypeDropdown(noteTypeInput.value);
      noteTypeDropdown.classList.remove("hidden");
    });

    // Select item
    noteTypeDropdown.addEventListener("click", (e) => {
      const btn = e.target.closest("button");

      if (!btn) return;

      noteTypeInput.value = btn.dataset.name;

      noteTypeDropdown.classList.add("hidden");
    });

    // Hide outside click
    document.addEventListener("click", (e) => {
      if (
        !noteTypeInput.contains(e.target) &&
        !noteTypeDropdown.contains(e.target)
      ) {
        noteTypeDropdown.classList.add("hidden");
      }
    });
  }
}
//Modern dropdown
function populateNoteTypeDropdown(search = "") {
  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];

  const dropdown = document.getElementById("noteTypeDropdown");

  if (!dropdown) return;

  const filtered = templates.filter((tpl) =>
    tpl.name.toLowerCase().includes(search.toLowerCase()),
  );

  dropdown.innerHTML = filtered
    .map(
      (template) => `
      <button
        type="button"
        class="w-full px-4 py-3 text-left hover:bg-indigo-50 border-b last:border-b-0"
        data-name="${template.name}"
      >
        ${template.name}
      </button>
    `,
    )
    .join("");
}

function selectTemplate(name) {
  document.getElementById("noteType").value = name;
  document.getElementById("noteTypeDropdown").classList.add("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark");

  const icon = document.body.classList.contains("dark") ? "☀️" : "🌙";

  document.getElementById("themeToggle").textContent = icon;
  document.getElementById("mobileThemeBtn").textContent = icon;
}

const form = document.getElementById("engineerForm");

const generateBtn = document.getElementById("generateBtn");

const output = document.getElementById("output");
const noteStatus = document.getElementById("noteStatus");

const copyBtn = document.getElementById("copyBtn");

const noteTypeInput = document.getElementById("noteType");
const noteTypesList = document.getElementById("noteTypes");

function validateForm(data) {
  if (!data.ein) return "Engineer EIN is required";

  if (!data.engineerName) return "Engineer Name is required";

  if (!data.ogea) return "OGEA is required";

  return null;
}

function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

function toggleSpeedTable() {
  const wrapper = document.getElementById("speedTableWrapper");
  const icon = document.getElementById("speedTableArrow");

  if (wrapper.classList.contains("max-h-0")) {
    wrapper.classList.remove("max-h-0");
    wrapper.classList.add("max-h-[1000px]");

    icon.style.transform = "rotate(180deg)";
  } else {
    wrapper.classList.remove("max-h-[1000px]");
    wrapper.classList.add("max-h-0");

    icon.style.transform = "rotate(0deg)";
  }
}
function filterSpeedTable() {
  const searchValue = document
    .getElementById("speedSearch")
    .value.trim()
    .toLowerCase();

  const rows = document.querySelectorAll("#speedTable tbody tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    const type = cells[0]?.textContent.trim().toLowerCase() || "";
    const upstream = cells[1]?.textContent.trim() || "";
    const downstream = cells[2]?.textContent.trim() || "";

    const speedPair = `${upstream}-${downstream}`.toLowerCase();
    const speedSpace = `${upstream} ${downstream}`.toLowerCase();

    const rowText = row.textContent.toLowerCase();

    const match =
      rowText.includes(searchValue) ||
      speedPair.includes(searchValue) ||
      speedSpace.includes(searchValue) ||
      type.includes(searchValue);

    row.style.display = match ? "" : "none";
  });
  const cards = document.querySelectorAll("#speedCards > div");

  cards.forEach((card) => {
    const text = card.textContent.toLowerCase();

    card.style.display = text.includes(searchValue) ? "" : "none";
  });
}

//help-Line

const appState = {
  notes: [],
};

// ---------- State ----------
let helpNotes = JSON.parse(localStorage.getItem("helpNotes")) || [
  "Advice the CSE to give us call back.",
  "Advice the CSE to contact to the service provider.",
  "CSE confirmed solid PON light and all services working.",
];

// ---------- Modal ----------
document.getElementById("openModalBtn").addEventListener("click", openModal);

function openModal() {
  document.getElementById("helpModal").classList.remove("hidden");
  renderHelpNotesModal();
}

function closeModal() {
  document.getElementById("helpModal").classList.add("hidden");
}

// ---------- Renderers ----------
function renderHelpNotesModal() {
  const list = document.getElementById("helpList");
  list.innerHTML = helpNotes
    .map(
      (note, index) => `
        <div class="flex justify-between items-center bg-orange-50 p-2 rounded">
          <span contenteditable="true" 
                onblur="updateHelpNote(${index}, this.textContent)" 
                class="flex-grow p-1 rounded focus:outline-none">${note}</span>
          <button onclick="deleteHelpNote(${index})" class="ml-2 px-2 py-1 bg-red-500 text-white rounded"><i class="fa-solid fa-trash"></i></button>
        </div>
      `,
    )
    .join("");
}

function renderHelpNotesHome() {
  const container = document.getElementById("helpContainer");
  container.innerHTML = helpNotes
    .map(
      (note) => `
        <div class="bg-white border rounded-lg p-3 shadow-sm cursor-pointer hover:bg-orange-100"
             onclick="copyHelpNote(this)">
          ${note}
        </div>
      `,
    )
    .join("");
}

// ---------- CRUD ----------
function addHelpNote() {
  const input = document.getElementById("newNoteInput");
  const note = input.value.trim();
  if (note) {
    helpNotes.push(note);
    input.value = "";
    refreshAll();
  }
}

function updateHelpNote(index, newText) {
  if (newText.trim() !== "") {
    helpNotes[index] = newText.trim();
    refreshAll();
  }
}

function deleteHelpNote(index) {
  helpNotes.splice(index, 1);
  refreshAll();
}

// ---------- Sync ----------
function refreshAll() {
  saveNotes();
  renderHelpNotesModal();
  renderHelpNotesHome();
}

// ---------- Persistence ----------
function saveNotes() {
  localStorage.setItem("helpNotes", JSON.stringify(helpNotes));
}

// ---------- Home Toggle ----------
function toggleHelpLine() {
  const container = document.getElementById("helpContainer");
  const btn = document.getElementById("toggleHelpBtn");

  if (container.classList.contains("hidden")) {
    renderHelpNotesHome();
    container.classList.remove("hidden");
    btn.textContent = "Hide";
  } else {
    container.classList.add("hidden");
    btn.textContent = "Show";
  }
}

// ---------- Copy ----------
function copyHelpNote(element) {
  navigator.clipboard.writeText(element.textContent.trim());
  const original = element.innerHTML;
  element.innerHTML = "✅ Copied!";
  setTimeout(() => {
    element.innerHTML = original;
  }, 1000);
}

//Clear Form

function clearForm() {
  document.querySelectorAll("input, textarea, select").forEach((field) => {
    if (field.type === "checkbox" || field.type === "radio") {
      field.checked = false;
    } else {
      field.value = "";
    }
  });

  // Restore default OGEA value
  document.getElementById("ogea").value = "OGEA";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // ✅ Clear the generated note output
  const output = document.getElementById("output");
  if (output) {
    output.textContent = "";
  }
  // ✅ Optionally reset status text if you have one
  const noteStatus = document.getElementById("noteStatus");
  if (noteStatus) {
    noteStatus.textContent = "Ready";
  }
}

//Validation

function setupInputValidation() {
  const einInput = document.getElementById("ein");
  const ogeaInput = document.getElementById("ogea");
  const ontInput = document.getElementById("ontSerial");
  const spareOntInput = document.getElementById("spareOnt");
  const nameInput = document.getElementById("name");
  const lightInput = document.getElementById("light");
  const upstreamInput = document.getElementById("upstream");
  const downstreamInput = document.getElementById("downstream");

  // EIN - Numbers only
  einInput.addEventListener("input", () => {
    einInput.value = einInput.value.replace(/\D/g, "");
  });

  [ogeaInput, ontInput, spareOntInput].forEach((field) => {
    if (field) {
      field.addEventListener("input", () => {
        field.value = field.value.replace(/\s+/g, "");
      });
    }
  });

  [ontInput, spareOntInput].forEach((field) => {
    field.addEventListener("input", () => {
      field.value = field.value.toUpperCase().replace(/\s+/g, "");
    });
  });

  // OGEA - Always uppercase
  ogeaInput.addEventListener("input", () => {
    let value = ogeaInput.value.toUpperCase();

    // Always keep OGEA prefix
    if (!value.startsWith("OGEA")) {
      value = "OGEA" + value.replace(/^OGEA/i, "");
    }

    // Max 12 characters total
    ogeaInput.value = value.substring(0, 12);
  });

  // Prevent deleting OGEA prefix
  ogeaInput.addEventListener("keydown", (e) => {
    const cursorPos = ogeaInput.selectionStart;

    if (
      (e.key === "Backspace" && cursorPos <= 4) ||
      (e.key === "Delete" && cursorPos < 4)
    ) {
      e.preventDefault();
    }
  });

  // Initialize value
  ogeaInput.value = "OGEA";

  // Engineer Name - Letters only
  nameInput.addEventListener("input", () => {
    nameInput.value = nameInput.value.replace(/[^a-zA-Z\s]/g, "");
  });

  // Light Reading - Numbers only
  lightInput.addEventListener("input", () => {
    lightInput.value = lightInput.value.replace(/\D/g, "");
  });

  // Upstream - Numbers only
  upstreamInput.addEventListener("input", () => {
    upstreamInput.value = upstreamInput.value.replace(/\D/g, "");
  });

  // Downstream - Numbers only
  downstreamInput.addEventListener("input", () => {
    downstreamInput.value = downstreamInput.value.replace(/\D/g, "");
  });
}

function handleGenerateNote() {
  const ein = document.getElementById("ein").value.trim();
  const ogea = document.getElementById("ogea").value.trim();
  const name = document.getElementById("name").value.trim();

  if (!ein) {
    alert("Please enter EIN.");
    document.getElementById("ein").focus();
    return;
  }

  if (ein.length < 6) {
    alert("Please enter a valid EIN.");
    document.getElementById("ein").focus();
    return;
  }

  if (!ogea || ogea === "OGEA") {
    alert("Please enter a valid OGEA.");
    document.getElementById("ogea").focus();
    return;
  }

  if (ogea.length !== 12) {
    alert("OGEA must be exactly 12 characters.");
    document.getElementById("ogea").focus();
    return;
  }

  if (!name) {
    alert("Please enter Engineer Name.");
    document.getElementById("name").focus();
    return;
  }

  // All validations passed
  generateNote();
}

function markInvalid(fieldId) {
  document
    .getElementById(fieldId)
    .classList.add("border-red-500", "ring-2", "ring-red-300");
}

document.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.classList.remove("border-red-500", "ring-2", "ring-red-300");
  });
});

//Copy Content
function copyFromInput(inputId) {
  const input = document.getElementById(inputId);
  const toast = document.getElementById("toast");

  if (input) {
    navigator.clipboard.writeText(input.value).then(() => {
      toast.textContent = "✅ Copied!";
      toast.classList.remove("hidden");
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
        toast.classList.add("hidden");
      }, 1500);
    });
  }
}

function generateNote() {
  const noteType = document.getElementById("noteType").value;
  // Try hard-coded first
  let note = null;
  // If not found, check user-added templates
  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];

  const tpl = templates.find((t) => t.name === noteType);

  if (tpl) {
    note = tpl.text;
  }

  if (!note) {
    alert("Please select a valid note type.");
    return;
  }

  const replacements = {
    "[[NAME]]": `[${document.getElementById("name").value.trim()}]`,
    "[[EIN]]": `[${document.getElementById("ein").value.trim()}]`,
    "[[OGEA]]": `[${document.getElementById("ogea").value.trim()}]`,
    "[[ONT_SERIAL]]": `[${document.getElementById("ontSerial").value.trim()}]`,
    "[[SPARE_ONT]]": `[${document.getElementById("spareOnt").value.trim()}]`,
    "[[ROUTE]]": `[${document.getElementById("route").value.trim()}]`,
    "[[LIGHT]]": `[-${document.getElementById("light").value.trim()}dbm]`,
    "[[REFERENCE]]": `[${document.getElementById("reference").value.trim()}]`,
    "[[DOWNSTREAM]]": `[${document.getElementById("downstream").value.trim()}]`,
    "[[UPSTREAM]]": `[${document.getElementById("upstream").value.trim()}]`,
    "[[CORRECT_SASA]]": `[${document.getElementById("correctRoute").value.trim()}]`,
    "[[INCORRECT_SASA]]": `[${document.getElementById("incorrectRoute").value.trim()}]`,
    "[[SASA_1]]": `[${document.getElementById("sasa_1").value.trim()}]`,
    "[[SASA_2]]": `[${document.getElementById("sasa_2").value.trim()}]`,
  };

  Object.entries(replacements).forEach(([placeholder, value]) => {
    note = note.replaceAll(placeholder, value);
  });

  // ✅ Update output
  const output = document.getElementById("output");
  output.textContent = note;

  // ✅ Update status
  document.getElementById("noteStatus").textContent = "Generated";

  // ✅ Scroll smoothly to the generated notes section
  output.scrollIntoView({ behavior: "smooth", block: "center" });
}

function copyNote() {
  const output = document.getElementById("output");

  if (!output.textContent.trim()) {
    alert("No note generated to copy.");
    return;
  }

  navigator.clipboard.writeText(output.textContent).then(() => {
    const btn = document.getElementById("copyBtn");

    const originalText = btn.innerHTML;

    btn.innerHTML = "✅ Copied!";
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1500);
  });
}

function toggleEdit() {
  const output = document.getElementById("output");
  const editBtn = document.getElementById("editBtn");
  const noteStatus = document.getElementById("noteStatus");

  // Check if there's any note text
  if (!output.textContent.trim()) {
    noteStatus.textContent = "No note to edit";
    return; // stop here
  }

  const isEditing = output.contentEditable === "true";

  if (isEditing) {
    output.contentEditable = "false";
    editBtn.innerHTML = "✏️ Edit";
    noteStatus.textContent = "Saved";
  } else {
    output.contentEditable = "true";
    output.focus();
    editBtn.innerHTML = "Done";
    noteStatus.textContent = "Editing...";
  }
}

document.getElementById("output").addEventListener("blur", () => {
  const output = document.getElementById("output");

  if (output.contentEditable === "true") {
    output.contentEditable = "false";

    document.getElementById("editBtn").innerHTML = "✏️ Edit";
    document.getElementById("noteStatus").textContent = "Saved";
  }
});

function saveNote() {
  const notes = JSON.parse(localStorage.getItem("fttpNotes")) || [];

  const newNote = {
    id: Date.now(),
    ein: document.getElementById("ein").value.trim(),
    ogea: document.getElementById("ogea").value.trim(),
    ont: document.getElementById("ontSerial").value.trim(),
    text: document.getElementById("output").textContent.trim(),
    createdAt: new Date().toLocaleString(),
  };

  if (!newNote.text) {
    alert("No note to save.");
    return;
  }

  notes.unshift(newNote);

  localStorage.setItem("fttpNotes", JSON.stringify(notes));

  showToast("Note saved");
}

function isAnyModalOpen() {
  return (
    !document.getElementById("historyModal").classList.contains("hidden") ||
    !document.getElementById("templateModal").classList.contains("hidden")
  );
}

function toggleScrollButton() {
  document
    .getElementById("scrollTopBtn")
    .classList.toggle("hidden", isAnyModalOpen());
}

function openHistory() {
  document.getElementById("historyModal").classList.remove("hidden");
  toggleScrollButton();
  loadHistory();
}

function loadHistory() {
  let notes = JSON.parse(localStorage.getItem("fttpNotes")) || [];
  renderHistory(notes);
}

function renderHistory(notes) {
  const historyList = document.getElementById("historyList");
  historyList.innerHTML = "";

  if (!notes.length) {
    historyList.innerHTML = "<p class='text-gray-500'>No results</p>";
    return;
  }

  notes.forEach((item) => {
    historyList.innerHTML += `
      <div class="border rounded-xl p-4 shadow-sm hover:shadow-md transition">
        <div class="text-xs text-gray-500 mb-2">${item.createdAt}</div>
        <div class="text-sm mb-2">
          <b>EIN:</b> ${item.ein || "-"} |
          <b>OGEA:</b> ${item.ogea || "-"} |
          <b>ONT:</b> ${item.ont || "-"}
        </div>
        <div class="text-sm whitespace-pre-wrap mb-2">${item.text}</div>
        <button
          onclick="copyNoteText('${item.text.replace(/'/g, "\\'")}')"
          class="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          📋 Copy
        </button>
      </div>
    `;
  });
}

function copyNoteText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("Note copied!");
  });
}

function filterHistory() {
  const value = document.getElementById("historySearch").value.toLowerCase();
  let notes = JSON.parse(localStorage.getItem("fttpNotes")) || [];

  const filtered = notes.filter(
    (n) =>
      (n.ein || "").toLowerCase().includes(value) ||
      (n.ogea || "").toLowerCase().includes(value) ||
      (n.ont || "").toLowerCase().includes(value) ||
      (n.text || "").toLowerCase().includes(value),
  );

  renderHistory(filtered);
}

function sortHistory(mode) {
  let notes = JSON.parse(localStorage.getItem("fttpNotes")) || [];

  if (mode === "asc") notes.sort((a, b) => a.id - b.id);
  if (mode === "desc") notes.sort((a, b) => b.id - a.id);
  if (mode === "recent") notes.sort((a, b) => b.id - a.id);
  if (mode === "modified")
    notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  renderHistory(notes);
}

function closeHistory() {
  const modal = document.getElementById("historyModal");
  modal.classList.add("hidden");

  // Reset search bar
  const search = document.getElementById("historySearch");
  if (search) search.value = "";

  // Restore body scroll
  document.body.style.overflow = "";

  updateScrollProgress();
}

// Toast notification
let toastTimer;

function showToast(message, scope = "global") {
  const toast =
    scope === "modal"
      ? document.getElementById("modalToast")
      : document.getElementById("toast");

  if (!toast) return;

  clearTimeout(toastTimer);

  toast.textContent = message;

  toast.classList.remove("hidden");

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.classList.add("hidden");
    }, 300);
  }, 2000);
}

function clearHistory() {
  // Ask for confirmation before deleting
  if (!confirm("Are you sure you want to delete all saved notes?")) return;

  // Remove notes from localStorage
  localStorage.removeItem("fttpNotes");

  // Refresh the modal list
  renderHistory([]);

  // Show feedback
  showToast("History cleared");
}

// Template Modal

function openTemplateModal() {
  document.getElementById("templateModal").classList.remove("hidden");
  toggleScrollButton();
  loadTemplates();
}

function closeTemplateModal() {
  document.getElementById("templateModal").classList.add("hidden");
  updateScrollProgress();
}

function loadTemplates() {
  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];
  renderTemplates(templates);
}

function renderTemplates(templates) {
  const list = document.getElementById("templateList");
  list.innerHTML = "";

  if (!templates.length) {
    list.innerHTML = "<p class='text-gray-500'>No templates added yet</p>";
    return;
  }

  const sortOption = document.getElementById("templateSort")?.value || "recent";
  if (sortOption === "recent") {
    templates = [...templates].reverse();
  }

  templates.forEach((tpl) => {
    const item = document.createElement("div");
    item.className =
      "bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition";

    item.innerHTML = `
<div class="flex gap-4 justify-between">

  <div class="flex-1 min-w-0">
    <h3 class="font-semibold text-indigo-600 mb-2">${tpl.name}</h3>
    <p class="text-sm text-gray-600 whitespace-pre-line break-words">
      ${tpl.text.replace(/^\s+/gm, "")}
    </p>
  </div>

  <div class="flex flex-col gap-2 shrink-0">
    <button
      onclick="editTemplate('${tpl.name}')"
      class="px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
    >
      <i class="fa-regular fa-pen-to-square"></i>
    </button>

    <button
      onclick="deleteTemplate('${tpl.name}')"
      class="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
    >
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>

</div>
`;
    list.appendChild(item);
  });

  document.getElementById("templateCount").textContent =
    `${templates.length} Templates`;
}

function addTemplate() {
  const name = document.getElementById("templateName").value.trim();
  const text = document.getElementById("templateText").value.trim();

  if (!name || !text) {
    alert("Please enter both name and text for the template.");
    return;
  }

  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];
  templates.push({ name, text });

  localStorage.setItem("noteTemplates", JSON.stringify(templates));
  renderTemplates(templates);
  populateNoteTypeDropdown();

  document.getElementById("templateName").value = "";
  document.getElementById("templateText").value = "";
  showToast("Template added", "modal");
}

function editTemplate(name) {
  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];
  const tpl = templates.find((t) => t.name === name);
  if (!tpl) return;

  document.getElementById("templateName").value = tpl.name;
  document.getElementById("templateText").value = tpl.text;

  const saveBtn = document.getElementById("saveTemplateBtn");
  saveBtn.classList.remove("hidden"); // show only Save when editing

  // Scroll to form (mobile-friendly)
  document
    .getElementById("templateName")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  saveBtn.onclick = function () {
    const newName = document.getElementById("templateName").value.trim();
    const newText = document.getElementById("templateText").value.trim();

    if (!newName || !newText) {
      alert("Please enter both name and text.");
      return;
    }

    const updatedTemplates = templates.map((t) =>
      t.name === name ? { name: newName, text: newText } : t,
    );

    localStorage.setItem("noteTemplates", JSON.stringify(updatedTemplates));
    renderTemplates(updatedTemplates);
    populateNoteTypeDropdown();

    document.getElementById("templateName").value = "";
    document.getElementById("templateText").value = "";
    saveBtn.classList.add("hidden"); // hide Save after update

    showToast("Template updated", "modal");
  };
}

function deleteTemplate(name) {
  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];

  // ✅ Confirmation popup
  const confirmed = confirm(`Are you sure you want to delete "${name}"?`);
  if (!confirmed) return;

  // ✅ Delete by name
  const updatedTemplates = templates.filter((tpl) => tpl.name !== name);

  localStorage.setItem("noteTemplates", JSON.stringify(updatedTemplates));
  renderTemplates(updatedTemplates);
  populateNoteTypeDropdown();
  showToast("Template deleted", "modal");
}

function clearTemplates() {
  if (!confirm("Delete all templates?")) return;

  localStorage.removeItem("noteTemplates");
  renderTemplates([]);
  populateNoteTypeDropdown();
  showToast("All templates cleared", "modal");
}

function resetTemplates() {
  if (
    !confirm(
      "Reset to default templates? This will overwrite your current templates.",
    )
  )
    return;

  const defaults = initTemplates(); // ✅ call to get defaults
  localStorage.setItem("noteTemplates", JSON.stringify(defaults));
  renderTemplates(defaults);
  populateNoteTypeDropdown();
  showToast("Templates reset to default", "modal");
}

//previewTemplate
function previewTemplate() {
  const previewBox = document.getElementById("templatePreview");
  const name = document.getElementById("templateName").value.trim();
  let text = document.getElementById("templateText").value.trim();

  if (!name || !text) {
    alert("Please enter both name and text to preview.");
    return;
  }

  // Toggle off if already visible
  if (!previewBox.classList.contains("hidden")) {
    previewBox.classList.add("hidden");
    previewBox.textContent = "";
    return;
  }

  // Replace placeholders with sample values
  const sampleReplacements = {
    "[[NAME]]": "[John Doe]",
    "[[EIN]]": "[123456]",
    "[[OGEA]]": "[OGEA12345678]",
    "[[ONT_SERIAL]]": "[ONT987654]",
    "[[SPARE_ONT]]": "[SPARE123]",
    "[[ROUTE]]": "[Route-45]",
    "[[LIGHT]]": "[-20dbm]",
    "[[REFERENCE]]": "[REF001]",
    "[[DOWNSTREAM]]": "[100 Mbps]",
    "[[UPSTREAM]]": "[50 Mbps]",
  };

  Object.entries(sampleReplacements).forEach(([placeholder, value]) => {
    text = text.replaceAll(placeholder, value);
  });

  previewBox.textContent = text;
  previewBox.classList.remove("hidden");
}

// function filterTemplates() {
function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, ""); // remove non-alphanumeric
}

function filterTemplates() {
  const value = normalize(document.getElementById("templateSearch").value);

  const templates = JSON.parse(localStorage.getItem("noteTemplates")) || [];

  const filtered = templates.filter(
    (tpl) =>
      normalize(tpl.name).includes(value) ||
      normalize(tpl.text).includes(value),
  );

  renderTemplates(filtered);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateScrollProgress() {
  const btn = document.getElementById("scrollTopBtn");
  const circle = document.getElementById("progressCircle");

  if (!btn || !circle) return;

  if (isAnyModalOpen()) {
    btn.classList.add("hidden");
    return;
  }

  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  const label = document.getElementById("scrollLabel");

  if (label) {
    label.textContent = `${Math.round(progress)}%`;
  }

  // Circle calculations
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;

  const offset = circumference - (progress / 100) * circumference;

  circle.style.strokeDashoffset = offset;

  // Show button after scrolling
  if (scrollTop > 300) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
}

window.addEventListener("scroll", updateScrollProgress);

window.addEventListener("load", updateScrollProgress);

function filterSpeedCards() {
  const search = document.getElementById("speedCardSearch").value.toLowerCase();

  document.querySelectorAll(".speed-card").forEach((card) => {
    const text = card.dataset.search || "";

    card.style.display = text.includes(search) ? "block" : "none";
  });
}

function generateSpeedCards() {
  const tbody = document.querySelector("#speedTable tbody");
  const cardContainer = document.getElementById("speedCards");

  if (!tbody || !cardContainer) return;

  cardContainer.innerHTML = "";

  const rows = tbody.querySelectorAll("tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    if (cells.length < 5) return;

    const type = cells[0].textContent.trim();
    const upstream = cells[1].textContent.trim();
    const downstream = cells[2].textContent.trim();
    const ontProfile = cells[3].textContent.trim();
    const downstreamProfile = cells[4].textContent.trim();

    const card = document.createElement("div");

    card.className = "speed-card bg-white rounded-xl shadow border p-4";

    card.dataset.search =
      `${type} ${upstream} ${downstream} ${upstream}-${downstream} ${ontProfile} ${downstreamProfile}`.toLowerCase();

    card.innerHTML = `
      <div class="flex justify-between items-center mb-3">
        <span class="font-semibold text-indigo-600">${type}</span>
        <span class="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
          ${upstream} / ${downstream}
        </span>
      </div>

      <div class="space-y-2 text-sm">
<div>
  <div class="font-medium text-gray-500">Upstream Profile</div>
  <div
    class="break-all cursor-pointer text-indigo-600 hover:underline"
    onclick="copyProfile('${ontProfile}')"
  >
    ${ontProfile}
  </div>
</div>

<div>
  <div class="font-medium text-gray-500">Downstream Profile</div>
  <div
    class="break-all cursor-pointer text-indigo-600 hover:underline"
    onclick="copyProfile('${downstreamProfile}')"
  >
    ${downstreamProfile}
  </div>
</div>
      </div>
    `;

    cardContainer.appendChild(card);
  });
}

function copyProfile(profile) {
  navigator.clipboard.writeText(profile).then(() => {
    showToast(`Copied: ${profile}`);
  });
}

function makeDesktopProfilesCopyable() {
  const rows = document.querySelectorAll("#speedTable tbody tr");

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    if (cells.length < 5) return;

    // Upstream Profile column
    [cells[3], cells[4]].forEach((cell) => {
      cell.classList.add(
        "cursor-pointer",
        "text-indigo-600",
        "hover:underline",
        "font-medium",
      );

      cell.title = "Click to copy";

      cell.addEventListener("click", () => {
        copyProfile(cell.textContent.trim());
      });
    });
  });
}

//AUTO SASA FINDER

// Lookup function
function findSasaFromRoute(route) {
  if (!route || route.trim() === "") return null;

  const normalizedRoute = route.trim().replace(/^\/+/, "");
  const match = templateList.find((entry) =>
    normalizedRoute.includes(entry.path),
  );

  return match ? `${match.sasa} (${match.group})` : null;
}

// Auto-fill SASA fields
function autoFillSasa() {
  const correctRoute = document.getElementById("correctRoute").value;
  const incorrectRoute = document.getElementById("incorrectRoute").value;

  const correctSasa = findSasaFromRoute(correctRoute);
  const incorrectSasa = findSasaFromRoute(incorrectRoute);

  document.getElementById("sasa_1").value = correctSasa || " Not Found";
  document.getElementById("sasa_2").value = incorrectSasa || " Not Found";
}
