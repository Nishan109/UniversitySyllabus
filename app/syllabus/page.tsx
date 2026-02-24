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
    kind: "theory",
  },
]

const electiveOptionsII = [
  { code: "BCSED1-611", name: "Mobile Application Development" },
  { code: "BCSED1-612", name: "Machine Learning" },
  { code: "BCSED1-613", name: "Distributed Systems" },
  { code: "BCSED1-614", name: "Signals and Systems" },
]

const electiveOptionsIII = [
  { code: "BCSED1-621", name: "Data Mining" },
  { code: "BCSED1-622", name: "Cloud Computing" },
  { code: "BCSED1-623", name: "Parallel Processing" },
  { code: "BCSED1-624", name: "Embedded Systems" },
  ]

const electiveOptionsIV = [
  { code: "BELE0-F94", name: "Renewable Energy Sources" },
  ]

function CourseContentList({ content }: { content: string }) {
  const items = content
    .split(/[,;]/)
    .map((item) => item.trim())
    .filter(Boolean)

  return (
    <ul className="grid gap-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="group/item flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
        >
          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center group-hover/item:bg-primary group-hover/item:scale-110 transition-all">
            <ChevronRight className="w-2.5 h-2.5 text-primary group-hover/item:text-primary-foreground transition-colors" />
          </div>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

function sum<T extends keyof Course>(k: T) {
  return courses.reduce((acc, c) => (typeof c[k] === "number" ? acc + (c[k] as number) : acc), 0)
}

function SoftwareEngineeringDetails() {
  return (
    <div className="space-y-12 text-sm leading-relaxed">
      <section className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-4 p-6 rounded-2xl bg-accent/30 border border-border/50">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Course Objective</h3>
          <p className="text-foreground leading-relaxed">
            To enable the students to learn the principles and methodologies followed to develop good software.
          </p>
        </div>
        <div className="space-y-4 p-6 rounded-2xl bg-accent/30 border border-border/50">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Course Outcomes</h3>
          <ul className="space-y-2 list-none p-0 m-0">
            {[
              "Analyze software models and evolution principles.",
              "Understand analysis and design steps of development.",
              "Master coding, testing, and reliability protocols.",
              "Highlight software management activities and terms.",
            ].map((outcome, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary font-mono text-[10px] mt-0.5">0{i + 1}</span>
                <span className="text-foreground/80">{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
            Detailed Contents
          </h3>
          <div className="h-px w-full bg-border/40" />
        </div>

        <div className="grid gap-6">
          {[
            {
              title: "UNIT-I: Introduction & Life Cycle Models",
              hours: "10 Hrs",
              topics: [
                "Evolution and impact of Software engineering, Software crisis, Principles of Software Engineering, Feasibility study",
                "Software Life Cycle Models: Waterfall, prototyping, Evolutionary, and Spiral models, Comparison of software models.",
              ],
            },
            {
              title: "UNIT-II: Scheduling, Planning & Requirements",
              hours: "11 Hrs",
              topics: [
                "Scheduling and Planning: Management Activities, Project planning and control, cost estimation, project scheduling using PERT and GANTT charts.",
                "Requirement Analysis: Functional and Non-functional requirements, Requirements gathering, Requirements analysis and specification.",
              ],
            },
            {
              title: "UNIT-III: Software Design, Coding & Testing",
              hours: "14 Hrs",
              topics: [
                "Software Design: Basic principles of software design, modularity, cohesion, coupling and layering, function-oriented software design: DFD and Structure chart, object modeling using UML, Object-oriented software development, Design specifications, Design metrics, Verification and validation, User Interface design.",
                "Coding: Coding standards and Code review techniques, Coding styles, Coding metrics.",
                "Software Testing: Fundamentals of testing, Types of software testing, White-box, and black-box testing, test case design techniques, mutation testing and Testing metrics.",
              ],
            },
            {
              title: "UNIT-IV: Reliability & Quality Management",
              hours: "10 Hrs",
              topics: [
                "Reliability: Software reliability metrics, reliability growth modelling.",
                "Software Quality Management: Risk Management, Quality management, ISO and SEI CMMI, Six Sigma, Computer aided software engineering, Software maintenance, Software Configuration Management, Component-based software developments",
              ],
            },
          ].map((unit, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-border/40 bg-card/50 hover:bg-accent/20 transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                    Module 0{i + 1}
                  </span>
                  <h4 className="font-bold text-foreground text-lg tracking-tight">{unit.title}</h4>
                </div>
                <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                  {unit.hours}
                </span>
              </div>
              <div className="space-y-1">
                {unit.topics.map((topic, j) => (
                  <CourseContentList key={j} content={topic} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 border-t border-border/40 pt-8">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Recommended Resources</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Pressman, 'Software Engineering: A Practitioner's Approach', 3rd Edn., TMH, 2004",
            "Flecher and Hunt, 'Software Engineering and CASE: Bridging and Culture Gap', 2000.",
          ].map((book, i) => (
            <div key={i} className="flex gap-3 text-xs italic text-muted-foreground/80">
              <span className="text-primary not-italic font-bold">[{i + 1}]</span>
              {book}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ComputerNetworksDetails() {
  return (
    <div className="space-y-12 text-sm leading-relaxed">
      <section className="scroll-mt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Code</h3>
            <p className="font-mono font-bold">BCSES1-602</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">L-T-P-C</h3>
            <p className="font-mono font-bold">3-1-0-4</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
            <p className="font-mono font-bold">60 Hours</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
            <p className="font-mono font-bold">6th</p>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Objectives
          </h3>
          <ul className="space-y-3 list-none">
            {[
              "Develop understanding of modern network architectures from design and performance perspectives.",
              "Provide an opportunity to do network programming.",
              "Provide WLAN measurement ideas.",
            ].map((obj, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-mono font-bold">{i + 1}.</span>
                {obj}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Outcomes
          </h3>
          <ul className="space-y-3 list-none">
            {[
              "Explain functions of different layers of the OSI Protocol.",
              "Draw functional block diagrams of WANs, LANs, and WLANs and describe functions.",
              "Develop network programming for given TCP/IP protocol problems.",
              "Configure DNS, TELNET, EMAIL, FTP, HTTP, SNMP, and Firewalls using open source tools.",
            ].map((out, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-mono font-bold">{i + 1}.</span>
                {out}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Contents
        </h3>
        <div className="grid gap-6">
          {[
            {
              unit: "I",
              hours: "15 Hrs",
              title: "Data Communication Components",
              content:
                "Representation of data and its flow Networks, Various Connection Topology, Protocols and Standards, OSI model, Transmission Media, LAN: Wired LAN, Wireless LANs, Connecting LAN and Virtual LAN, Techniques for Bandwidth utilization: Multiplexing - Frequency division, Time division and Wave division, Concepts on spread spectrum.",
            },
            {
              unit: "II",
              hours: "15 Hrs",
              title: "Data Link Layer",
              content:
                "Medium Access Sub Layer: Error Detection and Error Correction - Fundamentals, Block coding, Hamming Distance, CRC; Flow Control and Error control protocols - Stop and Wait, Go back – N ARQ, Selective Repeat ARQ, Sliding Window, Piggybacking, Random Access, Multiple access protocols -Pure ALOHA, Slotted ALOHA, CSMA/CD, CDMA/CA",
            },
            {
              unit: "III",
              hours: "15 Hrs",
              title: "Network & Transport Layer",
              content:
                "Network Layer: Switching, Logical addressing – IPV4, IPV6; Address mapping – ARP, RARP, BOOTP and DHCP – Delivery, Forwarding and Unicast Routing protocols. Transport Layer: Process to Process Communication, UDP, TCP, SCTP Congestion Control; Quality of Service, QoS improving techniques: Leaky Bucket and Token Bucket algorithm.",
            },
            {
              unit: "IV",
              hours: "15 Hrs",
              title: "Application Layer & Cryptography",
              content:
                "Domain Name Space (DNS), DDNS, TELNET, EMAIL, File Transfer Protocol (FTP), WWW, HTTP, SNMP, Bluetooth, Firewalls, Basic concepts of Cryptography.",
            },
          ].map((item) => (
            <div
              key={item.unit}
              className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                    Unit {item.unit}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                  {item.hours}
                </span>
              </div>
              <CourseContentList content={item.content} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Recommended Books
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Data Communication and Networking, 4th Edition, Behrouz A. Forouzan, McGraw-Hill.",
            "Data and Computer Communication, 8th Edition, William Stallings, Pearson Prentice Hall India.",
          ].map((book, i) => (
            <div key={i} className="p-4 rounded-xl border border-border/50 bg-accent/10 text-xs text-muted-foreground">
              {book}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ComputerNetworkLabDetails() {
  return (
    <div className="space-y-12 text-sm leading-relaxed">
      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Objective
          </h3>
          <p className="text-muted-foreground">
            This practical course will enable students to implement networking in real world.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Outcomes
          </h3>
          <ul className="space-y-3 list-none">
            {[
              "To become familiarize with different networking components.",
              "To learn the concept of data transmission using different cables.",
              "To learn different topologies and implement file sharing.",
              "To implement different networks.",
            ].map((out, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-mono font-bold">{i + 1}.</span>
                {out}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Practical List
        </h3>
        <div className="grid gap-3">
          {[
            "Write specifications of latest desktops and laptops.",
            "Familiarization with Networking Components and devices: LAN Adapters, Hubs, Switches, Routers etc.",
            "Familiarization with Transmission media and Tools: Co-axial cable, UTP Cable, Crimping Tool, Connectors etc.",
            "To Prepare straight and cross cables.",
            "Study of various LAN topologies and their creation using network devices, cables and computers.",
            "Configuration of TCP/IP Protocols in Windows and Linux.",
            "Implementation of file and printer sharing.",
            "Designing and implementing Class A, B, C Networks",
            "Subnet planning and its implementation",
            "Installation of ftp server and client",
          ].map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
            >
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary font-mono font-bold text-xs border border-primary/20">
                {i + 1}
              </span>
              <p className="text-muted-foreground text-xs leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function MobileAppDevelopmentDetails() {
  return (
    <div className="space-y-12 text-sm leading-relaxed">
      <section className="scroll-mt-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Code</h3>
            <p className="font-mono font-bold">BCSED1-611</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">L-T-P-C</h3>
            <p className="font-mono font-bold">3-0-0-3</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
            <p className="font-mono font-bold">45 Hours</p>
          </div>
          <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
            <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
            <p className="font-mono font-bold">6th</p>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Objective
          </h3>
          <p className="text-muted-foreground">
            This course will help to manage mobile application data by integrating them with cloud services. This course
            also helps to understand different testing methodologies for mobile application.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <span className="h-6 w-1 bg-primary rounded-full" />
            Course Outcomes
          </h3>
          <ul className="space-y-3 list-none">
            {[
              "To learn application models of mobile application frameworks.",
              "To learn Mobile OS architectures.",
              "To be database access in different mobile OS.",
              "To learn testing methodologies for mobile applications.",
            ].map((out, i) => (
              <li key={i} className="flex gap-3 text-muted-foreground">
                <span className="text-primary font-mono font-bold">{i + 1}.</span>
                {out}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="space-y-6">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Contents
        </h3>
        <div className="grid gap-6">
          {[
            {
              unit: "I",
              hours: "11 Hrs",
              title: "Introduction to Mobile Devices",
              content:
                "Introduction to mobile devices: Introduction to Mobile Computing, Introduction to Android Development Environment, Mobile devices vs. desktop devices, ARM and intel architectures, Power management, screen resolution, Touch interfaces, Application deployment, App Store, Google play, Windows Store.",
            },
            {
              unit: "II",
              hours: "11 Hrs",
              title: "Mobile OS Architectures",
              content:
                "Mobile OS Architectures: Comparing and contrasting architectures of all three- Android, iOS and Windows, Underlying OS, Kernel structure and native level programming. Approaches to power management, Security.",
            },
            {
              unit: "III",
              hours: "12 Hrs",
              title: "Android/iOS/Win8 Apps & Intents",
              content:
                "Android/iOS/Win8 Apps: DB Access, network access, contacts/ photos/ etc. Underneath the frameworks: Native level programming on Android, Low Level programming on iOS, Windows low level APIs. Intents and services: Android intents and services, characteristics of mobile applications, Successful mobile development.",
            },
            {
              unit: "IV",
              hours: "11 Hrs",
              title: "Storing and Retrieving Data",
              content:
                "Storing and Retrieving data: Synchronization and replication of mobile data, Android storing and retrieving data, working with content provider, Putting it all together: packaging and deploying, Performance best practices, Android field service app.",
            },
          ].map((item) => (
            <div
              key={item.unit}
              className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                    Unit {item.unit}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                  {item.hours}
                </span>
              </div>
              <CourseContentList content={item.content} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ADDED MACHINE LEARNING DETAILS COMPONENT
const MachineLearningDetails = () => (
  <div className="space-y-12">
    <section className="grid sm:grid-cols-3 gap-6">
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Subject</h3>
        <p className="font-mono font-bold">Machine Learning</p>
        <p className="text-[10px] text-muted-foreground font-mono">BCSED1-612</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
        <p className="font-mono font-bold">45 Hours</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
        <p className="font-mono font-bold">6th</p>
      </div>
    </section>

    <div className="grid md:grid-cols-2 gap-12">
      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Objective
        </h3>
        <ul className="space-y-3 list-none">
          {["To learn applications of machine learning.", "To learn different learning algorithms."].map((obj, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {obj}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Outcomes
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To learn the concept of learning algorithm.",
            "To learn supervise learning.",
            "To learn unsupervised learning.",
            "To learn about SVMs.",
          ].map((out, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {out}
            </li>
          ))}
        </ul>
      </section>
    </div>

    <section className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Course Contents
      </h3>
      <div className="grid gap-6">
        {[
          {
            unit: "I",
            hours: "12 Hrs",
            title: "Introduction & Preparation of Model",
            content:
              "Introduction: Introduction to machine learning, use of machine learning, type of machine learning: supervised, unsupervised and reinforcement learning, Main challenges in machine learning. Preparation of Model: Introduction to Statistical Learning, Significance of Mean, Mode, Median, variance, standard deviation, Basic types of data in machine learning, Exploring structure of data, Data quality and remediation, Data pre-processing. Modelling and evaluation: Model Selection, Training, Model representation and interpretability, evaluating performance of a model.",
          },
          {
            unit: "II",
            hours: "08 Hrs",
            title: "Supervised Learning",
            content:
              "Supervised Learning (Regression/Classification): Basic methods: Distance-based methods, Decision Trees, random forest model, Naive Bayes. Linear models: Simple Linear Regression, Multiple linear regression, Polynomial regression, Logistic Regression.",
          },
          {
            unit: "III",
            hours: "15 Hrs",
            title: "Unsupervised Learning",
            content:
              "Unsupervised Learning (Clustering): Different types of clustering techniques, K-medoids, K-means/Kernel K-means, Hierarchical clustering. Dimensionality Reduction: Principal Component Analysis (PCA) and Linear Discriminant Analysis (LDA), Introduction to Matrix Factorization and Matrix Completion.",
          },
          {
            unit: "IV",
            hours: "10 Hrs",
            title: "Support Vector Machines",
            content:
              "Support Vector Machines(SVM): Linear learning machines and Kernel space, Making Kernels and working in feature space, SVM for classification and regression problems. Recent trends in machine learning.",
          },
        ].map((item) => (
          <div
            key={item.unit}
            className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                  Unit {item.unit}
                </span>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                {item.hours}
              </span>
            </div>
            <CourseContentList content={item.content} />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Recommended Books
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            author: "Saikat Dutt , Subramanian Chandramouli and Amit Kumar Das",
            title: "Machine Learning",
            publisher: "Pearson, 2019",
          },
          {
            author: "Oliver Theobald",
            title: "Machine Learning For Absolute Beginners: A Plain English Introduction",
            publisher: "Second Edition",
          },
        ].map((book, i) => (
          <div key={i} className="p-4 rounded-xl border border-border/50 bg-accent/10 space-y-1">
            <h4 className="font-bold text-sm">
              {i + 1}. {book.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {book.author}, {book.publisher}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

const DataMiningDetails = () => (
  <div className="space-y-12">
    <section className="grid sm:grid-cols-3 gap-6">
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Subject</h3>
        <p className="font-mono font-bold">Data Mining</p>
        <p className="text-[10px] text-muted-foreground font-mono">BCSED1-621</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
        <p className="font-mono font-bold">45 Hours</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
        <p className="font-mono font-bold">6th</p>
      </div>
    </section>

    <div className="grid md:grid-cols-2 gap-12">
      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Objective
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To cover powerful data mining techniques including clustering, association rules, and classification.",
            "Web mining is also introduced.",
          ].map((obj, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {obj}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Outcomes
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To introduce the basic concepts of Data Mining techniques.",
            "To have knowledge of decision trees and algorithms used for it.",
            "To learn the concept of search engines.",
            "To understand web mining.",
          ].map((out, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {out}
            </li>
          ))}
        </ul>
      </section>
    </div>

    <section className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Course Contents
      </h3>
      <div className="grid gap-6">
        {[
          {
            unit: "I",
            hours: "12 Hrs",
            title: "Data Mining Fundamentals",
            content:
              "Data Mining: Introduction to data mining, introduction to data warehousing, architecture of data warehouse, association rules in mining, Naive algorithm, Apriori algorithm, direct hashing and pruning (DHP), Dynamic Item set counting (DIC), Mining frequent pattern without candidate generation (FP, growth), performance evaluation of algorithms.",
          },
          {
            unit: "II",
            hours: "11 Hrs",
            title: "Classification Techniques",
            content:
              "Classification: Introduction, decision tree, tree induction algorithms – split algorithm based on information theory, split algorithm based on Gini index; naïve Bayes method; estimating predictive accuracy of classification method.",
          },
          {
            unit: "III",
            hours: "11 Hrs",
            title: "Cluster Analysis & Search Engines",
            content:
              "Cluster Analysis: Introduction, partitional methods, hierarchical methods, density based methods, dealing with large databases, cluster software; Search engines: Characteristics of Search engines, Search Engine Functionality, Search Engine Architecture, Ranking of web pages, The search engine history, Enterprise Search, Enterprise Search Engine Software.",
          },
          {
            unit: "IV",
            hours: "11 Hrs",
            title: "Web Data Mining",
            content:
              "Web Data Mining: Web Terminology and Characteristics, Locality and Hierarchy in the web, Web Content Mining, Web Usage Mining, Web Structure Mining, Web mining Software.",
          },
        ].map((item) => (
          <div
            key={item.unit}
            className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                  Unit {item.unit}
                </span>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                {item.hours}
              </span>
            </div>
            <CourseContentList content={item.content} />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Recommended Books
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            author: "Carlo Vercellis",
            title: "Business Intelligence: Data Mining and Optimization for Decision Making",
            publisher: "1st Edn., WILEY, 2009",
          },
          {
            author: "J. Han, M. Kamber and J. Pei",
            title: "Data Mining Concepts and Techniques",
            publisher: "3rd Edn., Morgan Kaufmann Publishers, 2011",
          },
        ].map((book, i) => (
          <div key={i} className="p-4 rounded-xl border border-border/50 bg-accent/10 space-y-1">
            <h4 className="font-bold text-sm">
              {i + 1}. {book.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {book.author}, {book.publisher}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

const CloudComputingDetails = () => (
  <div className="space-y-12">
    <section className="grid sm:grid-cols-3 gap-6">
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Subject</h3>
        <p className="font-mono font-bold">Cloud Computing</p>
        <p className="text-[10px] text-muted-foreground font-mono">BCSED1-622</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
        <p className="font-mono font-bold">45 Hours</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
        <p className="font-mono font-bold">6th</p>
      </div>
    </section>

    <div className="grid md:grid-cols-2 gap-12">
      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Objective
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To understand what is cloud storage, characteristics of cloud computing.",
            "To know about cloud computing services and cloud hosting, cloud data storage and deployment models.",
            "To learn cloud computing companies and cloud service providers, cloud infrastructure.",
            "To learn advantages of cloud computing and issues with cloud computing.",
          ].map((obj, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {obj}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Outcomes
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To learn basic terms used in cloud computing and its benefits.",
            "To learn architecture of Hadoop.",
            "To implement cloud security.",
            "To manage services provided by cloud.",
          ].map((out, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {out}
            </li>
          ))}
        </ul>
      </section>
    </div>

    <section className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Course Contents
      </h3>
      <div className="grid gap-6">
        {[
          {
            unit: "I",
            hours: "12 Hrs",
            title: "Cloud Computing Fundamentals",
            content:
              "Cloud Computing Fundamentals: Introduction to Cloud Computing, private, public and hybrid cloud. Cloud types: IaaS, PaaS, SaaS. Benefits and challenges of cloud computing, public vs private clouds, Role of virtualization in enabling the cloud; Benefits and challenges to Cloud architecture.",
          },
          {
            unit: "II",
            hours: "12 Hrs",
            title: "Hadoop Ecosystem",
            content:
              "Hadoop - Apache Hadoop Architecture, Hadoop YARN, Comparison of Traditional system & Hadoop Ecosystem, Installation steps of Hadoop (1.x), Moving Data in and out of Hadoop, need for Record Reader and Record writer, understanding inputs and outputs, java for map reduce. Hadoop (2.x) - architecture, Comparison with Hadoop (1.x).",
          },
          {
            unit: "III",
            hours: "10 Hrs",
            title: "Security & Open Source Clouds",
            content: "Cloud Security and Trust Management, Open Source Clouds -Baadal, Open Stack, Cloud Stack.",
          },
          {
            unit: "IV",
            hours: "11 Hrs",
            title: "Cloud Applications & Management",
            content:
              "Cloud Applications, Cloud Services Management: Reliability, availability and security of services deployed from the cloud. Performance and scalability of services, tools and technologies used to manage cloud services deployment, computing infrastructures available for implementing cloud based services.",
          },
        ].map((item) => (
          <div
            key={item.unit}
            className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                  Unit {item.unit}
                </span>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                {item.hours}
              </span>
            </div>
            <CourseContentList content={item.content} />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Recommended Books
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            author: "Chris Eaton, Dirk deroos et al.",
            title: "Understanding Big data",
            publisher: "1st Edn., McGraw Hill, 2015",
          },
          {
            author: "Tom White",
            title: "HADOOP: The definitive Guide",
            publisher: "4th Edn., O Reilly, 2015",
          },
          {
            author: "Gautam Shroff",
            title: "Enterprise Cloud Computing Technology Architecture Applications",
            publisher: "1st Edn., Cambridge University Press, 2010",
          },
        ].map((book, i) => (
          <div key={i} className="p-4 rounded-xl border border-border/50 bg-accent/10 space-y-1">
            <h4 className="font-bold text-sm">
              {i + 1}. {book.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {book.author}, {book.publisher}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

const RenewableEnergySourcesDetails = () => (
  <div className="space-y-12">
    <section className="grid sm:grid-cols-3 gap-6">
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Subject</h3>
        <p className="font-mono font-bold">Renewable Energy Sources</p>
        <p className="text-[10px] text-muted-foreground font-mono">BELE0-F94</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Duration</h3>
        <p className="font-mono font-bold">36 Hours</p>
      </div>
      <div className="space-y-1 p-4 rounded-xl border border-border/50 bg-accent/30">
        <h3 className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Semester</h3>
        <p className="font-mono font-bold">6th</p>
      </div>
    </section>

    <div className="grid md:grid-cols-2 gap-12">
      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Objective
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "To obtain knowledge about renewable energy sources and solar energy and their utilization.",
            "To introduce to wind energy conversion and bio-mass energy conversion systems.",
            "To introduce to geothermal energy and energy from ocean. To make them aware of hydrogen energy sources.",
          ].map((obj, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {obj}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <span className="h-6 w-1 bg-primary rounded-full" />
          Course Outcomes
        </h3>
        <ul className="space-y-3 list-none">
          {[
            "Students will get knowledge about utilization of renewable energy sources and solar energy.",
            "They will learn about wind energy conversion and bio-mass energy conversion systems.",
            "They will become aware about geothermal energy, energy from ocean and hydrogen energy sources.",
          ].map((out, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground">
              <span className="text-primary font-mono font-bold">{i + 1}.</span>
              {out}
            </li>
          ))}
        </ul>
      </section>
    </div>

    <section className="space-y-6">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Course Contents
      </h3>
      <div className="grid gap-6">
        {[
          {
            unit: "I",
            hours: "13 Hrs",
            title: "Solar Energy",
            content:
              "Conventional energy sources and availability, Introduction to new energy techniques & renewable energy sources; Solar Energy, Solar constant, Radiation geometry, Solar energy collectors, Concentrated and flat plate, Energy balance and collector efficiency, Solar energy storage, Application to space heating, distillation, cooling and greenhouse effect.",
          },
          {
            unit: "II",
            hours: "12 Hrs",
            title: "Wind and Bio-Energy",
            content:
              "Basic principle of wind energy conversion, site selection, analysis of aerodynamic forces acting on wind mill blades and estimation of power output. Biomass conversion technology, photosynthesis, biogas plant, thermal gasification.",
          },
          {
            unit: "III",
            hours: "10 Hrs",
            title: "Geothermal Energy",
            content:
              "Sources- hydrothermal, hot dry rock, geothermal fossil system, movers for geothermal energy.",
          },
          {
            unit: "IV",
            hours: "10 Hrs",
            title: "Energy from Ocean",
            content:
              "Ocean thermal electric conversion, energy from tides, small hydroelectric development.",
          },
          {
            unit: "V",
            hours: "10 Hrs",
            title: "Hydrogen Energy Sources",
            content:
              "Introduction of hydrogen production methods, storage, utilization, magneto hydrodynamic power, thermoionic generation, nuclear fusion energy.",
          },
        ].map((item) => (
          <div
            key={item.unit}
            className="group p-8 rounded-2xl border border-border/50 bg-card hover:bg-accent/30 transition-all shadow-sm"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30">
                  Unit {item.unit}
                </span>
                <h4 className="text-xl font-bold tracking-tight">{item.title}</h4>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-muted/30 px-3 py-1 rounded-full border border-border/50 shadow-inner">
                {item.hours}
              </span>
            </div>
            <CourseContentList content={item.content} />
          </div>
        ))}
      </div>
    </section>

    <section className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2">
        <span className="h-6 w-1 bg-primary rounded-full" />
        Recommended Books
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          {
            author: "G.D. Rai",
            title: "Non-Conventional Energy Sources",
            publisher: "Khanna Publishers, Delhi, 2011",
          },
          {
            author: "S. Rao, B.B. Parulekar",
            title: "Non-Conventional Renewable and Conventional",
            publisher: "Khanna Publishers, Delhi",
          },
        ].map((book, i) => (
          <div key={i} className="p-4 rounded-xl border border-border/50 bg-accent/10 space-y-1">
            <h4 className="font-bold text-sm">
              {i + 1}. {book.title}
            </h4>
            <p className="text-xs text-muted-foreground">
              {book.author}, {book.publisher}
            </p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

function SyllabusPageComponent() {
  const [seOpen, setSeOpen] = useState(false)
  const [cnOpen, setCnOpen] = useState(false)
  const [cnLabOpen, setCnLabOpen] = useState(false)
  const [madOpen, setMadOpen] = useState(false)
  // ADDED ML OPEN TO ANYOPEN CHECK
  const [mlOpen, setMlOpen] = useState(false)
  const [dmOpen, setDmOpen] = useState(false)
  const [ccOpen, setCcOpen] = useState(false)
  const [resOpen, setResOpen] = useState(false)

  useEffect(() => {
    const anyOpen = seOpen || cnOpen || cnLabOpen || madOpen || mlOpen || dmOpen || ccOpen || resOpen
    if (!anyOpen) return
    const prevBodyOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevBodyOverflow
    }
  }, [seOpen, cnOpen, cnLabOpen, madOpen, mlOpen, dmOpen, ccOpen, resOpen])

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
            { group: "Group II", options: electiveOptionsII, color: "from-primary/10 to-blue-50/50" },
            { group: "Group III", options: electiveOptionsIII, color: "from-indigo-500/10 to-purple-50/50" },
            { group: "Group IV", options: electiveOptionsIV, color: "from-amber-500/10 to-orange-50/50" },
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
                            <RenewableEnergySourcesDetails />
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
