interface BadgeProps {
    content: string | number;
}

const getClassStyle = (content: string | number) => {
    switch (content) {
        case 'Manhã':
            return 'bg-label-success';
        case 'Tarde':
            return 'bg-label-error';
        case 'Noite':
            return 'bg-label-warning';
        default:
            return 'bg-label-success';
    }
};

export default function Badge({ content }: BadgeProps) {
    const badgeClass = getClassStyle(content);

    return (
    <div className="d-flex flex-column">
        <small className={`text-truncate d-none d-sm-block badge ${badgeClass}`}>
            {content}
        </small>
    </div>
    );
}