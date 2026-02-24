"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { OfflineIndicator } from "@/components/offline-indicator"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import ArrowRight from "@/components/icons/ArrowRight"
import { ArrowLeft, ChevronRight, BookOpen } from "lucide-react" // added new icons

type Course = {
  code: string
  name: string
  L: number | "-"
  T: number | "-"
  P: number | "-"
  int: number
  ext: number
  total: number
  credits: number
  kind: "theory" | "lab" | "training" | "elective"
}

const courses: Course[] = [
  {
    code: "BCSES1-601",
    name: "Software Engineering",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "theory",
  },
  {
    code: "BCSES1-602",
    name: "Computer Networks",
    L: 3,
    T: 1,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 4,
    kind: "theory",
  },
  {
    code: "BCSES1-603",
    name: "Computer Network Laboratory",
    L: 0,
    T: 0,
    P: 2,
    int: 60,
    ext: 40,
    total: 100,
    credits: 1,
    kind: "lab",
  },
  {
    code: "BCSES1-604",
    name: "***Project-I",
    L: 0,
    T: 0,
    P: 4,
    int: 60,
    ext: 40,
    total: 100,
    credits: 2,
    kind: "lab",
  },
  {
    code: "DE-II",
    name: "Departmental Elective-II",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "elective",
  },
  {
    code: "DE-III",
    name: "Departmental Elective-III",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "elective",
  },
  {
    code: "XXXX",
    name: "Open Elective**",
    L: 3,
    T: 0,
    P: 0,
    int: 40,
    ext: 60,
    total: 100,
    credits: 3,
    kind: "elective",
  },
]

const electiveGroupsData = [
  {
    name: "Elective-II (Select any One)",
    electives: [
      { code: "BCSED1-611", name: "Mobile Application Development" },
      { code: "BCSED1-612", name: "Machine Learning" },
      { code: "BCSED1-613", name: "Distributed Systems" },
      { code: "BCSED1-614", name: "Signals and Systems" },
    ],
  },
  {
    name: "Elective-III (Select any One)",
    electives: [
      { code: "BCSED1-621", name: "Data Mining" },
      { code: "BCSED1-622", name: "Cloud Computing" },
      { code: "BCSED1-623", name: "Parallel Processing" },
      { code: "BCSED1-624", name: "Embedded Systems" },
    ],
  },
  {
    name: "Elective-IV (Select any One)",
    electives: [
      { code: "BELE0-F94", name: "Renewable Energy Sources" },
      { code: "BMEE0-F95", name: "Robotics Engineering" },
    ],
  },
]

function RenewableEnergySourcesToDetails() {
  const contentItems = [
    "To obtain knowledge about renewable energy sources and solar energy and their utilization.",
    "To introduce to wind energy conversion and bio-mass energy conversion systems.",
    "To introduce to geothermal energy and energy from ocean. To make them aware of hydrogen energy sources.",
  ]
  
  const units = [
    {
      name: "UNIT-I (13 Hrs.)",
      title: "Solar Energy",
      content: "Conventional energy sources and availability, Introduction to new energy techniques & renewable energy sources; Solar Energy, Solar constant, Radiation geometry, Solar energy collectors, Concentrated and flat plate, Energy balance and collector efficiency, Solar energy storage, Application to space heating, distillation, cooling and greenhouse effect."
    },
    {
      name: "UNIT-II (12 Hrs.)",
      title: "Wind and Bio-Energy",
      content: "Basic principle of wind energy conversion, site selection, analysis of aerodynamic forces acting on wind mill blades and estimation of power output. Biomass conversion technology, photosynthesis, biogas plant, thermal gasification."
    },
    {
      name: "UNIT-III (10 Hrs.)",
      title: "Geothermal Energy",
      content: "Sources- hydrothermal, hot dry rock, geothermal fossil system, movers for geothermal energy."
    },
    {
      name: "UNIT-IV (10 Hrs.)",
      title: "Energy from Ocean",
      content: "Ocean thermal electric conversion, energy from tides, small hydroelectric development."
    },
    {
      name: "UNIT-V (10 Hrs.)",
      title: "Hydrogen Energy Sources",
      content: "Introduction of hydrogen production methods, storage, utilization, magneto hydrodynamic power, thermoionic generation, nuclear fusion energy."
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-foreground">Course Objectives</h3>
          <div className="space-y-2">
            {contentItems.map((item, idx) => (
              <div key={idx} className="flex gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 hover:border-primary/30 transition-all group cursor-pointer">
                <span className="text-primary font-bold text-sm mt-0.5 min-w-6 group-hover:scale-110 transition-transform">{idx + 1}.</span>
                <p className="text-sm text-foreground/80 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Course Contents</h3>
        <div className="space-y-3">
          {units.map((unit, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {unit.name}
                  </span>
                  <h4 className="text-base md:text-lg font-bold mt-2 text-foreground">{unit.title}</h4>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed ml-0">{unit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DistributedSystemsDetails() {
  const objectives = [
    "To understand the concepts, architecture, and design principles of distributed operating systems.",
    "To learn about process and resource management in a distributed environment.",
    "To understand synchronization and communication mechanisms in distributed systems.",
    "To explore fault tolerance and security in distributed operating systems.",
  ]

  const units = [
    {
      name: "UNIT-I (12 Hrs.)",
      title: "Distributed Operating Systems Fundamentals",
      content: "Introduction to distributed systems, characteristics, advantages and challenges. System models: Workstations, Network model, Cluster model, Grid model. Communication: Point-to-point communication, message passing, RPC, Group communication. Naming: Flat naming, structured naming, attribute-based naming."
    },
    {
      name: "UNIT-II (12 Hrs.)",
      title: "Synchronization & Distributed Algorithms",
      content: "Lamport's logical clocks, Vector clocks, Global state, Distributed snapshot, Mutual exclusion algorithms: Centralized, Token ring, Fully distributed. Election algorithms: Bully algorithm, Ring algorithm. Consensus algorithms and Byzantine generals problem."
    },
    {
      name: "UNIT-III (10 Hrs.)",
      title: "Process & Resource Management",
      content: "Process migration and code mobility. Load balancing and scheduling in distributed systems. Resource management and allocation. Memory management in distributed systems. Distributed file systems: Architecture, caching, consistency models."
    },
    {
      name: "UNIT-IV (11 Hrs.)",
      title: "Fault Tolerance & Security",
      content: "Reliability and fault tolerance: Failure models, failure detection, recovery techniques. Replication strategies: Primary-backup, Quorum-based. Distributed transactions and two-phase commit. Security in distributed systems: Authentication, authorization, encryption."
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Course Objectives</h3>
        <div className="space-y-2">
          {objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 hover:border-primary/30 transition-all group cursor-pointer">
              <span className="text-primary font-bold text-sm mt-0.5 min-w-6 group-hover:scale-110 transition-transform">{idx + 1}.</span>
              <p className="text-sm text-foreground/80 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Course Contents</h3>
        <div className="space-y-3">
          {units.map((unit, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {unit.name}
                  </span>
                  <h4 className="text-base md:text-lg font-bold mt-2 text-foreground">{unit.title}</h4>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed ml-0">{unit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function RoboticsEngineeringDetails() {
  const objectives = [
    "To introduce the concept, scope, and socio-economic considerations of automation, emphasizing low-cost automation techniques.",
    "To provide knowledge of fluid power control systems, including hydraulic and pneumatic components, circuits, and logic design.",
    "To explore the fundamentals of electrical and electronic controls, including PLCs, sensors, and the integration of mechanical systems with computer and electronics.",
    "To familiarize students with robotics, their classifications, components, sensors, and industrial applications for various operations.",
  ]

  const units = [
    {
      name: "UNIT-I (12 Hrs.)",
      title: "Introduction & Fluid Power Control",
      content: "Concept and scope of automation: Socio-economic consideration: Low cost automation. Fluid power control elements and standard graphical symbols. Construction and performance of fluid power generators. Hydraulic and pneumatic cylinders - construction, design and mounting. Hydraulic and pneumatic valves for pressure, flow and direction control. Servo valves and servo systems with mechanical feedback, servomm differential equation and its solution for step position input."
    },
    {
      name: "UNIT-II (15 Hrs.)",
      title: "Pneumatic Logic Circuits & Fluidics",
      content: "Design of pneumatic logic circuits for a given time displacement diagram or sequence of operations. Boolean algebra. Truth tables. Conda effect. Fluidic elements - their construction working and performance characteristics. Elementary fluidic circuits."
    },
    {
      name: "UNIT-III (10 Hrs.)",
      title: "Transfer Devices, Feeders & Controls",
      content: "Classification, Construction details and application of transfer devices and feeders (Vibratory bowl feeder, reciprocating tube feeder and centrifugal hopper feeder). Electrical and Electronic Controls: Introduction to electrical and electronic controls such as electromagnetic controllers - transducers and sensors, microprocessors, programmable logic controllers (PLC). Integration of mechanical systems with electrical, electronic and computer systems."
    },
    {
      name: "UNIT-IV (8 Hrs.)",
      title: "Robotics & Industrial Applications",
      content: "Introduction, classification based on geometry, devices, control and path movement. End effectors - types and applications. Sensors - types and applications. Concept of Robotic/Machine vision, Teach pendant. Industrial Applications of Robots for material transfer, machine loading / unloading, welding, assembly and spray painting operations."
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Course Objectives</h3>
        <div className="space-y-2">
          {objectives.map((obj, idx) => (
            <div key={idx} className="flex gap-3 p-3 rounded-lg border border-border/50 hover:bg-accent/5 hover:border-primary/30 transition-all group cursor-pointer">
              <span className="text-primary font-bold text-sm mt-0.5 min-w-6 group-hover:scale-110 transition-transform">{idx + 1}.</span>
              <p className="text-sm text-foreground/80 leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold text-foreground">Course Contents</h3>
        <div className="space-y-3">
          {units.map((unit, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-card/50 transition-all group">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {unit.name}
                  </span>
                  <h4 className="text-base md:text-lg font-bold mt-2 text-foreground">{unit.title}</h4>
                </div>
              </div>
              <p className="text-sm text-foreground/70 leading-relaxed ml-0">{unit.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SyllabusPageComponent() {
  const [seOpen, setSeOpen] = useState(false)
  const [cnOpen, setCnOpen] = useState(false)
  const [nlOpen, setNlOpen] = useState(false)
  const [madOpen, setMadOpen] = useState(false)
  const [mlOpen, setMlOpen] = useState(false)
  const [dmOpen, setDmOpen] = useState(false)
  const [ccOpen, setCcOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)
  const [robOpen, setRobOpen] = useState(false)
  const [dosOpen, setDosOpen] = useState(false)

  useEffect(() => {
    const anyOpen = seOpen || cnOpen || nlOpen || madOpen || mlOpen || dmOpen || ccOpen || resOpen || robOpen || dosOpen
    if (!anyOpen) return
    const prevBodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBodyOverflow
    }
  }, [seOpen, cnOpen, nlOpen, madOpen, mlOpen, dmOpen, ccOpen, resOpen, robOpen, dosOpen])

  const totals = {
    courses: courses.length,
    theory: courses.filter((c) => c.kind === "theory").length,
    labs: courses.filter((c) => c.kind === "lab").length,
    int: sum("int"),
    ext: sum("ext"),
    total: sum("total"),
    credits: sum("credits"),
  }

  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30">
      <OfflineIndicator />

      <header className="relative pt-32 pb-24 px-6 overflow-hidden border-b border-border/40 bg-gradient-to-b from-accent/20 via-transparent to-transparent">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 items-start">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-bold uppercase tracking-widest text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Version 6.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-3xl leading-[1.1]">
              The complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-indigo-600">
                syllabus platform.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Standardized academic framework for Computer Science & Engineering. Built for performance, available
              offline, and meticulously documented.
            </p>
            <div className="flex gap-4 mt-4">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-lg shadow-primary/20">
                Get Started
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-border hover:bg-accent px-8 shadow-sm bg-transparent"
              >
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 border border-border/50 overflow-hidden rounded-2xl backdrop-blur-sm shadow-xl">
          {[
            { label: "Total Credits", value: totals.credits },
            { label: "Theory Courses", value: totals.theory },
            { label: "Lab Modules", value: totals.labs },
            { label: "Total Marks", value: totals.total },
          ].map((stat, i) => (
            <div key={i} className="bg-card p-8 space-y-2 hover:bg-accent/50 transition-colors">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground tracking-tighter">{stat.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-32">
        <div className="flex items-end justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Course Matrix</h2>
            <p className="text-muted-foreground text-sm">Evaluation criteria and contact hour distribution.</p>
          </div>
          <div className="h-px flex-1 mx-8 bg-border/40 hidden md:block" />
          <div className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">6TH_SEM_STABLE</div>
        </div>

        <div className="grid gap-4">
          {courses.map((c) => (
            <div
              key={c.code}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <span className="text-6xl font-black font-mono tracking-tighter">{c.code.split("-").pop()}</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                      {c.code}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                      {c.kind}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {c.name}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-8 md:gap-12">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Credits</p>
                    <p className="text-xl font-bold text-foreground">{c.credits}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">L-T-P</p>
                    <p className="text-xl font-bold text-foreground">
                      {c.L}-{c.T}-{c.P}
                    </p>
                  </div>

                  {(c.code === "BCSES1-601" || c.code === "BCSES1-602" || c.code === "BCSES1-603") && (
                    <Dialog
                      open={c.code === "BCSES1-601" ? seOpen : c.code === "BCSES1-602" ? cnOpen : cnLabOpen}
                      onOpenChange={
                        c.code === "BCSES1-601" ? setSeOpen : c.code === "BCSES1-602" ? setCnOpen : setCnLabOpen
                      }
                    >
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground px-6 group/btn shadow-sm"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                        <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                          <div className="flex items-center gap-4">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                              onClick={() => {
                                if (c.code === "BCSES1-601") setSeOpen(false)
                                else if (c.code === "BCSES1-602") setCnOpen(false)
                                else setCnLabOpen(false)
                              }}
                            >
                              <ArrowLeft className="h-4 w-4" />
                            </Button>
                            <div className="space-y-0.5">
                              <div className="flex items-center gap-2">
                                <BookOpen className="w-3 h-3 text-primary" />
                                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                  Subject File
                                </p>
                              </div>
                              <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                {c.name}
                              </DialogTitle>
                            </div>
                          </div>
                          <div className="hidden sm:block">
                            <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                              {c.code}
                            </span>
                          </div>
                        </DialogHeader>
                        <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                          {c.code === "BCSES1-601" && <SoftwareEngineeringDetails />}
                          {c.code === "BCSES1-602" && <ComputerNetworksDetails />}
                          {c.code === "BCSES1-603" && <ComputerNetworkLabDetails />}
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-32 border-t border-border/40">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { group: "Group II", options: electiveGroupsData[0].electives, color: "from-primary/10 to-blue-50/50" },
            { group: "Group III", options: electiveGroupsData[1].electives, color: "from-indigo-500/10 to-purple-50/50" },
            { group: "Group IV", options: electiveGroupsData[2].electives, color: "from-amber-500/10 to-orange-50/50" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-10 rounded-3xl border border-border/50 bg-gradient-to-br ${item.color} dark:from-primary/20 dark:to-transparent backdrop-blur-sm space-y-8 shadow-lg`}
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{item.group}</h3>
                <p className="text-muted-foreground text-sm">Select any one specialization module.</p>
              </div>
              <div className="grid gap-4">
                {item.options.map((opt) => (
                  <div
                    key={opt.code}
                    className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-card group cursor-default hover:bg-accent transition-colors shadow-sm"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {opt.name}
                      </span>
                      <span className="text-[10px] font-mono text-muted-foreground">{opt.code}</span>
                    </div>
                    {opt.code === "BCSED1-611" && (
                      <Dialog open={madOpen} onOpenChange={setMadOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setMadOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <MobileAppDevelopmentDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BCSED1-613" && (
                      <Dialog open={dosOpen} onOpenChange={setDosOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setDosOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <DistributedSystemsDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BCSED1-612" && (
                      <Dialog open={mlOpen} onOpenChange={setMlOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setMlOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <MachineLearningDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BCSED1-621" && (
                      <Dialog open={dmOpen} onOpenChange={setDmOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setDmOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <DataMiningDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BCSED1-622" && (
                      <Dialog open={ccOpen} onOpenChange={setCcOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setCcOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <CloudComputingDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BELE0-F94" && (
                      <Dialog open={resOpen} onOpenChange={setResOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setResOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <RenewableEnergySourcesToDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {opt.code === "BMEE0-F95" && (
                      <Dialog open={robOpen} onOpenChange={setRobOpen}>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 rounded-full border border-border/50 hover:bg-primary hover:text-primary-foreground group/btn shadow-sm text-[10px] font-bold uppercase tracking-wider"
                          >
                            Details
                            <ArrowRight className="ml-1.5 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl h-[85vh] p-0 gap-0 border border-border/50 rounded-2xl shadow-2xl bg-background backdrop-blur-xl">
                          <DialogHeader className="p-6 md:p-8 border-b border-border/50 flex flex-row items-center justify-between space-y-0 bg-card/50 backdrop-blur-md sticky top-0 z-50">
                            <div className="flex items-center gap-4">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full border border-border/50 hover:bg-accent hover:text-foreground shadow-sm"
                                onClick={() => setRobOpen(false)}
                              >
                                <ArrowLeft className="h-4 w-4" />
                              </Button>
                              <div className="space-y-0.5">
                                <div className="flex items-center gap-2">
                                  <BookOpen className="w-3 h-3 text-primary" />
                                  <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                                    Elective Archive
                                  </p>
                                </div>
                                <DialogTitle className="text-xl md:text-2xl font-bold tracking-tight">
                                  {opt.name}
                                </DialogTitle>
                              </div>
                            </div>
                            <div className="hidden sm:block">
                              <span className="text-[10px] font-mono text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-border/50 uppercase tracking-wider">
                                {opt.code}
                              </span>
                            </div>
                          </DialogHeader>
                          <div className="flex-1 overflow-y-auto p-6 md:p-12 modal-scroll bg-gradient-to-b from-card/50 to-background">
                            <RoboticsEngineeringDetails />
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default dynamic(() => Promise.resolve({ default: SyllabusPageComponent }), {
  ssr: false,
  loading: () => (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 sm:py-12 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading syllabus...</p>
      </div>
    </div>
  ),
})
