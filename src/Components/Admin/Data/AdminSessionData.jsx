import StatCards from "../../Shared/StatCards";

export default function AdminSessionData() {
    const stats = [
        {label: 'Active Sessions', value: 5, icon: 'PlayCircleOutlineIcon', color: 'yellow'},
        {label: 'Pending Sessions', value: 2, icon: 'HourglassEmptyIcon', color: 'orange'},
        {label: 'Total Sessions', value: 8, icon: 'EventNoteIcon', color: 'blue'}
    ]
    return <StatCards stats={stats} />;
}
